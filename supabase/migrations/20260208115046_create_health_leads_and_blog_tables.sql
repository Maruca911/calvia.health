/*
  # Create health_leads, blog_posts, and contact_submissions tables

  1. New Tables
    - `health_leads`
      - `id` (uuid, primary key)
      - `form_type` (text - general or specialized)
      - `category` (text - snoring, eyes, dentist, etc.)
      - `user_contact` (jsonb - name, email, phone, village)
      - `needs` (text array - selected health needs)
      - `details` (jsonb - all additional form data)
      - `budget_range` (text)
      - `timeline` (text - immediate, 1-3 months, exploring)
      - `lead_score` (integer - 1 low, 2 medium, 3 high)
      - `status` (text - new, contacted, converted)
      - `created_at` (timestamptz)

    - `blog_posts`
      - `id` (uuid, primary key)
      - `slug` (text, unique)
      - `title` (text)
      - `meta_description` (text)
      - `focus_keyword` (text)
      - `excerpt` (text)
      - `content` (text - HTML content)
      - `featured_image_url` (text)
      - `featured_image_alt` (text)
      - `category` (text)
      - `tags` (text array)
      - `read_time_minutes` (integer)
      - `published` (boolean)
      - `published_at` (timestamptz)
      - `created_at` (timestamptz)

    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `message` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Allow anonymous inserts on health_leads and contact_submissions
    - Allow anonymous reads on published blog_posts
    - No public update or delete access

  3. Functions
    - `calculate_lead_score` trigger function for automatic lead scoring

  4. Indexes
    - blog_posts slug index for fast lookups
    - blog_posts category index for filtering
    - health_leads created_at index for sorting
*/

-- health_leads table
CREATE TABLE IF NOT EXISTS health_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  form_type text NOT NULL DEFAULT 'general',
  category text NOT NULL DEFAULT 'general',
  user_contact jsonb NOT NULL DEFAULT '{}'::jsonb,
  needs text[] DEFAULT '{}',
  details jsonb DEFAULT '{}'::jsonb,
  budget_range text DEFAULT '',
  timeline text DEFAULT 'exploring',
  lead_score integer DEFAULT 1,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE health_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous lead submissions"
  ON health_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated read of leads"
  ON health_leads
  FOR SELECT
  TO authenticated
  USING (true);

-- blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  meta_description text DEFAULT '',
  focus_keyword text DEFAULT '',
  excerpt text DEFAULT '',
  content text DEFAULT '',
  featured_image_url text DEFAULT '',
  featured_image_alt text DEFAULT '',
  category text DEFAULT 'general',
  tags text[] DEFAULT '{}',
  read_time_minutes integer DEFAULT 5,
  published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read of published posts"
  ON blog_posts
  FOR SELECT
  TO anon
  USING (published = true);

CREATE POLICY "Allow authenticated read of all posts"
  ON blog_posts
  FOR SELECT
  TO authenticated
  USING (true);

-- contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated read of contacts"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Lead scoring trigger function
CREATE OR REPLACE FUNCTION calculate_lead_score()
RETURNS TRIGGER AS $$
BEGIN
  IF (NEW.budget_range IN ('2000-5000', '5000+') AND NEW.timeline = 'immediate') THEN
    NEW.lead_score := 3;
  ELSIF (NEW.budget_range IN ('1000-2000', '2000-5000', '5000+') OR NEW.timeline = 'immediate') THEN
    NEW.lead_score := 2;
  ELSE
    NEW.lead_score := 1;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER lead_score_trigger
  BEFORE INSERT OR UPDATE ON health_leads
  FOR EACH ROW
  EXECUTE FUNCTION calculate_lead_score();

-- Indexes
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts (slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts (category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts (published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_health_leads_created ON health_leads (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_health_leads_score ON health_leads (lead_score DESC);
