import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export default function LifestyleBand() {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
    >
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3771836/pexels-photo-3771836.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&dpr=1)',
        }}
      >
        <div className="absolute inset-0 bg-dark-teal/70" />
      </div>

      <div className="relative z-10 container-narrow section-padding !py-20 sm:!py-28">
        <div className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-white/90 text-xl sm:text-2xl lg:text-3xl font-heading leading-relaxed italic">
            "From finding the right dentist to discovering a hidden spa -- we make health and wellness effortless in Calvia."
          </p>
          <div className="w-12 h-0.5 bg-white/30 mx-auto mt-8" />
        </div>
      </div>
    </section>
  );
}
