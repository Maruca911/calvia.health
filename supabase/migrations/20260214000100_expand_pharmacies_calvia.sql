/*
  # Expand blog post: pharmacies-calvia

  - Adds a complete, structured guide (with curated picks, FAQ, and sources).
  - Published and bumped to the top by setting published_at = now().
*/

UPDATE blog_posts
SET
  title = 'Pharmacies in Calvia: Where to Go and How It Works',
  meta_description = 'A practical guide to pharmacies in Calvia, Mallorca: prescriptions, over-the-counter medicines, farmacia de guardia (after-hours), and where to go in Santa Ponsa, Palmanova, Portals Nous, and Peguera.',
  focus_keyword = 'pharmacies in calvia mallorca',
  excerpt = 'Learn how pharmacies work in Calvia, Mallorca: prescriptions vs OTC, after-hours pharmacies (farmacia de guardia), what to bring, and a curated list of areas to start your search.',
  read_time_minutes = 12,
  featured_image_url = 'https://images.pexels.com/photos/3683108/pexels-photo-3683108.jpeg?auto=compress&cs=tinysrgb&w=1200',
  featured_image_alt = 'Pharmacies in Calvia, Mallorca',
  category = 'medical',
  tags = ARRAY['medical', 'pharmacy', 'prescriptions', 'calvia', 'mallorca', 'spain']::text[],
  published = true,
  published_at = now(),
  content = $calvia_pharmacies$
<div class="bg-amber-50 border-l-4 border-amber-500 p-4 my-6 rounded-r-lg">
  <p class="text-sm text-amber-900">
    <strong>Disclaimer:</strong> This guide is for general informational purposes only and does not constitute medical advice.
    For urgent symptoms or emergencies in Spain, call <strong>112</strong>. Medication rules and availability can change; confirm details directly with a pharmacy or clinician.
  </p>
</div>

<p>Pharmacies (Spanish: <em>farmacias</em>) are one of the most practical parts of healthcare in Mallorca. In Calvia, you will find pharmacies in every major area, including <strong>Santa Ponsa</strong>, <strong>Palmanova</strong>, <strong>Son Caliu</strong>, <strong>Portals Nous</strong>, <strong>Bendinat</strong>, and <strong>Peguera</strong>.</p>

<p>This article explains how pharmacies work in Spain, how prescriptions and e-prescriptions typically work, what <em>farmacia de guardia</em> means (after-hours duty pharmacy), and where to start looking depending on where you are staying in Calvia.</p>

<h2>How Pharmacies Work in Spain</h2>
<p>Spanish pharmacies are licensed and staffed by qualified pharmacists. They can often help with minor issues (for example, advising on OTC options for a cold, skin irritation, or allergies) and can explain how to take medicines safely. They cannot replace a doctor for diagnosis, and many prescription-only medicines (including antibiotics) legally require a prescription.</p>

<h3>Common Things You Can Do at a Pharmacy</h3>
<ul>
  <li><strong>Buy over-the-counter medication</strong> (pain relief, antihistamines, cough remedies, etc.).</li>
  <li><strong>Fill prescriptions</strong> issued in Spain (public or private).</li>
  <li><strong>Ask for pharmacist guidance</strong> on interactions, timing, and side effects.</li>
  <li><strong>Basic health checks</strong> may be available (varies by pharmacy): blood pressure, glucose, etc.</li>
</ul>

<h2>Prescriptions: Public vs Private (And What to Bring)</h2>
<h3>What to bring</h3>
<ul>
  <li>Your <strong>ID</strong> (passport or national ID).</li>
  <li>Your <strong>health card</strong> if you are in the Spanish public system (<em>tarjeta sanitaria</em>).</li>
  <li>The <strong>prescription</strong> (paper or digital), if applicable.</li>
</ul>

<h3>Public system prescriptions</h3>
<p>If you are registered in the public system, many prescriptions are issued electronically and are linked to your health card. The pharmacy can usually retrieve them from the system when you present your card and ID.</p>

<h3>Private prescriptions</h3>
<p>Private doctors in Mallorca may issue a paper or digital prescription. Pharmacies can often fill these, but policies can vary by medicine type. If you are unsure, call ahead.</p>

<h2>After-Hours: What “Farmacia de Guardia” Means</h2>
<p>A <strong>farmacia de guardia</strong> is a duty pharmacy that covers nights, weekends, and holidays. The duty rota changes, and each pharmacy typically displays the schedule (or a link/QR code) on the door. If you need medicine outside normal hours, the “guardia” system is the right path for non-emergency needs.</p>

<p>If symptoms are severe (breathing problems, chest pain, stroke symptoms, major bleeding, severe allergic reaction), do not wait for a pharmacy. Call <strong>112</strong> immediately.</p>

<h2>Curated Picks: Where to Start in Calvia (5–7 Options)</h2>
<p>Instead of guessing, start with the area you are in. These are good “first searches” on Google Maps, and they reflect the main Calvia zones where pharmacies are typically clustered.</p>

<div class="bg-gray-100 border border-gray-300 rounded-lg p-5 my-6">
  <h3 class="text-base font-semibold mb-3">Calvia Pharmacy Starting Points</h3>
  <ul class="text-sm space-y-2">
    <li><strong>Farmacia Santa Ponsa (Santa Ponsa)</strong> – Best for: quick access if you are staying near the beach and marina area. <a href="https://www.google.com/maps/search/?api=1&query=Farmacia%20Santa%20Ponsa%20Calvia" rel="nofollow">Maps</a></li>
    <li><strong>Farmacia Palmanova (Palmanova)</strong> – Best for: central Palmanova and nearby family hotels. <a href="https://www.google.com/maps/search/?api=1&query=Farmacia%20Palmanova%20Calvia" rel="nofollow">Maps</a></li>
    <li><strong>Farmacia Son Caliu (Son Caliu)</strong> – Best for: Son Caliu / coastal residential zones between Palmanova and Portals. <a href="https://www.google.com/maps/search/?api=1&query=Farmacia%20Son%20Caliu%20Calvia" rel="nofollow">Maps</a></li>
    <li><strong>Farmacia Portals Nous (Portals Nous)</strong> – Best for: Portals Nous and nearby Bendinat / Illetes areas. <a href="https://www.google.com/maps/search/?api=1&query=Farmacia%20Portals%20Nous%20Calvia" rel="nofollow">Maps</a></li>
    <li><strong>Farmacia Peguera (Peguera)</strong> – Best for: Peguera and Cala Fornells. <a href="https://www.google.com/maps/search/?api=1&query=Farmacia%20Peguera%20Calvia" rel="nofollow">Maps</a></li>
    <li><strong>Farmacia Calvia (Calvia town)</strong> – Best for: Calvia village / inland areas like Es Capdella and Galatzo region. <a href="https://www.google.com/maps/search/?api=1&query=Farmacia%20Calvia%20Mallorca" rel="nofollow">Maps</a></li>
  </ul>
</div>

<h2>How to Choose the Right Pharmacy (Quick Checklist)</h2>
<ul>
  <li><strong>Language:</strong> if you prefer English, ask when you arrive; many coastal areas have multilingual staff, but not all.</li>
  <li><strong>Convenience:</strong> choose the closest option for routine items; switch to a larger pharmacy if you need more specialized products.</li>
  <li><strong>Medication name differences:</strong> brand names differ across countries. Bring the active ingredient name if possible.</li>
  <li><strong>Guardia availability:</strong> for nights/weekends, use the duty rota (farmacia de guardia).</li>
</ul>

<h2>Typical Pricing Expectations (Ballpark)</h2>
<p>Prices vary by brand and whether you are using public coverage. As a rough guide:</p>
<ul>
  <li><strong>OTC basics</strong> (pain relief, antihistamines): often in the low tens of euros, depending on brand and pack size.</li>
  <li><strong>Prescription medicines</strong>: cost depends on your coverage and the medicine; ask the pharmacist for the price before purchase.</li>
  <li><strong>Supplements and cosmetics</strong>: can vary widely; compare brands if budget matters.</li>
</ul>

<h2>Frequently Asked Questions</h2>
<h3>Can I buy antibiotics at a pharmacy in Spain without a prescription?</h3>
<p>Typically no. Antibiotics are prescription-only in Spain. If you think you need them, consult a doctor.</p>

<h3>What is a “farmacia de guardia”?</h3>
<p>It is the designated duty pharmacy for after-hours periods (nights, weekends, holidays). The rota changes and is usually posted on pharmacy doors.</p>

<h3>Do pharmacies in Calvia speak English?</h3>
<p>Many do in tourist-heavy areas (Santa Ponsa, Palmanova, Portals Nous), but it is not guaranteed. Ask on arrival, or use translation for medicine names and symptoms.</p>

<h3>Can I use a foreign prescription?</h3>
<p>It depends on the medicine and the prescription format. Some pharmacies can dispense with EU-standard prescriptions, while others may require a Spanish doctor. Call ahead if it is important.</p>

<h3>Can a pharmacist diagnose me?</h3>
<p>Pharmacists can advise on minor issues and safe medication use, but they do not replace a doctor for diagnosis. Seek medical care for persistent, severe, or unclear symptoms.</p>

<h3>How do I find the nearest open pharmacy right now?</h3>
<p>Use Google Maps with your location and search “farmacia”. For after-hours, look for “farmacia de guardia” and check posted schedules on pharmacy doors.</p>

<h2>Related Reading</h2>
<p>See also: <a href="/blog/emergency-medical-services-calvia">Emergency Medical Services in Calvia</a> and <a href="/blog/health-insurance-mallorca">Health Insurance in Mallorca</a>.</p>

<div class="bg-gray-100 border border-gray-300 rounded-lg p-5 mt-8">
  <h3 class="text-base font-semibold mb-3">Sources and References</h3>
  <ul class="text-sm space-y-1">
    <li>Spanish medication regulator (AEMPS) guidance on prescription-only medicines</li>
    <li>Balearic public health system (IB-Salut) information on prescriptions and care pathways</li>
    <li>Professional pharmacy bodies (Spain/Balearics) for duty pharmacy rota concepts</li>
  </ul>
</div>
$calvia_pharmacies$
WHERE slug = 'pharmacies-calvia';

