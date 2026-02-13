export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQ_CATEGORIES = [
  'Vaccinations & Travel Health',
  'Common Health Problems',
  'Emergency Services & Medical Access',
  'Doctors, Insurance & Prescriptions',
  'Allergies & Chronic Conditions',
  'Wellness, Fitness & Lifestyle',
  'General Safety & Tips',
] as const;

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'What vaccines do I need for a trip to Mallorca?',
    answer:
      'For travel to Mallorca in 2026, no vaccines are strictly required for entry from most countries, but routine vaccinations are recommended. The CDC advises hepatitis A for food and water risks, hepatitis B for longer stays or medical procedures, MMR (measles, mumps, rubella) due to global outbreaks, and polio given recent detections in parts of Europe. Tdap (tetanus, diphtheria, pertussis) and influenza are also suggested, particularly for older adults or those with underlying conditions. In Calvia, visit local clinics like the British Medical Centre in Palmanova for pre-travel consultations. Check with your doctor 4 to 6 weeks before departure to allow time for any multi-dose vaccines to take full effect.',
    category: 'Vaccinations & Travel Health',
  },
  {
    question: 'Do I need a COVID-19 vaccine or test to enter Mallorca?',
    answer:
      'As of February 2026, Spain (including Mallorca) has no COVID-19 entry requirements for most travellers, including no proof of vaccination or negative testing. However, stay updated via the Spanish Ministry of Health official site, as rules can change with new variants or outbreaks. Comprehensive travel insurance covering COVID-related issues such as hospitalisation, quarantine accommodation, and repatriation is highly recommended. In Calvia, rapid antigen testing is available at pharmacies in Santa Ponsa and Magaluf if needed for return flights or personal reassurance. PCR testing is offered at private clinics such as Juaneda Miramar in Palma.',
    category: 'Vaccinations & Travel Health',
  },
  {
    question: 'Is hepatitis A vaccination recommended for Mallorca?',
    answer:
      'Yes, hepatitis A vaccination is recommended for most travellers to Mallorca due to potential exposure through contaminated food or water, particularly if you plan to eat at street markets, tapas bars in less touristy areas, or visit rural parts of the island including Calvia\'s inland hiking trails. The hepatitis A vaccine is safe, highly effective, and provides protection for up to 25 years with two doses. Ideally, get the first dose at least 2 weeks before travel to allow immunity to develop. The second dose can be administered 6 to 12 months later. Local Calvia health centres can administer the vaccine for registered residents. Travellers without a local GP should get vaccinated in their home country before departure.',
    category: 'Vaccinations & Travel Health',
  },
  {
    question: 'Should I get the rabies vaccine before visiting Mallorca?',
    answer:
      'Rabies vaccination is not routinely needed for Mallorca, as the risk is very low in mainland Spain and the Balearic Islands. There have been no recent cases in domestic animals, and Spain is classified as a low-risk country by the WHO. However, consider pre-exposure vaccination if you plan to spend extended time in rural Calvia areas with wildlife, go caving in the Serra de Tramuntana, or work with animals during your stay. Post-exposure prophylaxis (PEP) is available at Hospital Universitari Son Espases in Palma, which is the reference hospital for the Balearic Islands. If bitten by any animal, wash the wound thoroughly with soap and water and seek medical attention immediately regardless of vaccination status.',
    category: 'Vaccinations & Travel Health',
  },
  {
    question: 'What about MMR vaccine for travel to Spain including Mallorca?',
    answer:
      'Ensure you are up to date with MMR vaccination, as measles outbreaks continue to occur across Europe, including sporadic cases in Spain. The CDC recommends that all international travellers be fully vaccinated with two doses of MMR, especially children and adults born after 1957 who may not have received both doses. In the UK, MMR uptake has declined in recent years, so check your vaccination record before travelling. In Calvia, family clinics can provide booster doses for residents. If you are unsure of your vaccination history, a blood test (titre check) can confirm immunity. Measles spreads easily in crowded tourist areas, airports, and hotels, making vaccination particularly important for family holidays.',
    category: 'Vaccinations & Travel Health',
  },
  {
    question: 'Are there any required vaccinations for tourists in the Balearic Islands?',
    answer:
      'There are no mandatory vaccinations for entry to the Balearic Islands (Mallorca, Menorca, Ibiza, Formentera) from EU, UK, or most other countries. However, typhoid vaccination may be recommended for adventurous eaters, those planning extended rural stays, or travellers who will consume unpasteurised local dairy products. The Passport Health travel clinic network suggests typhoid protection for trips longer than two weeks with exposure to local food sources. Standard routine vaccinations (MMR, tetanus, hepatitis A and B) remain recommended for all travellers. Calvia\'s wellness retreats and hotels often include health screenings or can direct guests to nearby clinics for pre-travel consultations.',
    category: 'Vaccinations & Travel Health',
  },
  {
    question: 'Do I need typhoid vaccine for Mallorca?',
    answer:
      'Typhoid vaccination is recommended if you plan to consume unpasteurised dairy products, eat from street food vendors, or visit rural markets where food hygiene standards may vary. The vaccine is available in oral (capsule) or injectable form and protects against the Salmonella typhi bacteria, which is transmitted through contaminated food and water. While Spain has high food safety standards overall, the risk increases slightly for adventurous eaters exploring local markets in Calvia and across Mallorca. The injectable vaccine provides protection for about two years, while the oral version lasts approximately five years. Consult your travel health adviser or GP for personalised guidance.',
    category: 'Vaccinations & Travel Health',
  },
  {
    question: 'What health precautions should I take before flying to Palma de Mallorca?',
    answer:
      'Before flying to Palma, ensure all routine vaccinations are current, pack sufficient prescription medications in their original labelled containers, and bring a copy of your prescriptions. Consider motion sickness aids if you are prone to travel nausea, and compression stockings for flights over four hours to reduce DVT risk. Stay well hydrated on the flight and avoid excessive alcohol and caffeine, which contribute to dehydration. In 2026, no special entry precautions beyond standard travel health are needed for Mallorca. Upon arrival, Calvia\'s airport transfer services offer stress-free connections to resort areas. Bring sunscreen, a hat, and a refillable water bottle, as temperatures can be high even in spring and autumn.',
    category: 'Vaccinations & Travel Health',
  },
  {
    question: 'Is dengue a risk in Mallorca and do I need a vaccine?',
    answer:
      'Dengue risk in Mallorca is very low. There have been no cases of locally transmitted dengue in the Balearic Islands as of 2026, though climate change has introduced the Aedes albopictus (Asian tiger mosquito) to parts of coastal Spain. The dengue vaccine (Dengvaxia) is currently recommended only for individuals who have had a prior confirmed dengue infection and live in high-transmission areas, which does not include Mallorca. Standard insect repellent with DEET or picaridin is sufficient protection against mosquito bites during summer evenings in Calvia and surrounding areas. If you notice fever, severe headache, or muscle pain after mosquito bites, consult a doctor promptly.',
    category: 'Vaccinations & Travel Health',
  },
  {
    question: 'What travel insurance covers health issues in Mallorca?',
    answer:
      'Choose a comprehensive travel insurance policy that covers emergency medical treatment, hospital stays, medical evacuation and repatriation, and pre-existing conditions if applicable. The GHIC (Global Health Insurance Card) or EHIC provides access to Spanish state healthcare on the same terms as Spanish residents, but it does not cover private treatment, dental care, repatriation flights, or mountain rescue. US health insurance typically does not provide coverage in Europe, so supplemental international medical insurance is essential for American visitors. Policies should include at least 1 million euros in medical coverage. In Calvia, spas and wellness centres like Alua Wellness accept insured treatments for certain therapies. Always carry your insurance details and a 24-hour helpline number while travelling.',
    category: 'Vaccinations & Travel Health',
  },
  {
    question: 'What are the most common health problems for tourists in Mallorca?',
    answer:
      'The most frequent health issues affecting tourists in Mallorca are sunburn, heatstroke, dehydration, traveller\'s diarrhea, and insect bites. In Calvia\'s popular party areas like Magaluf, alcohol-related incidents including falls, injuries, and alcohol poisoning are unfortunately common during the summer season. Water sports injuries, jellyfish stings, and sea urchin punctures also occur on the coast. Prevention is straightforward: apply SPF 30 or higher sunscreen regularly, drink at least 2 to 3 litres of water daily, eat at reputable establishments, and moderate alcohol intake. For any medical concern, local pharmacies (farmacias) in Calvia are well-stocked and pharmacists can provide advice and over-the-counter remedies for minor ailments.',
    category: 'Common Health Problems',
  },
  {
    question: 'How can I avoid traveller\'s diarrhea in Mallorca?',
    answer:
      'While tap water in Mallorca meets EU safety standards, many tourists prefer bottled water due to the mineral taste. To reduce the risk of traveller\'s diarrhea, eat at establishments with good hygiene practices, avoid ice in drinks if you are particularly sensitive, choose freshly cooked foods over buffet items that have been sitting out, and wash your hands frequently especially before meals. Probiotics taken before and during travel may help maintain gut health. If symptoms develop, stay hydrated with oral rehydration solutions available at any Calvia pharmacy, eat bland foods, and rest. Most cases resolve within 2 to 3 days. Seek medical attention if you experience blood in stool, high fever above 38.5 degrees Celsius, or symptoms lasting more than 72 hours.',
    category: 'Common Health Problems',
  },
  {
    question: 'What should I do if I get food poisoning in Mallorca?',
    answer:
      'If you suspect food poisoning in Mallorca, focus on hydration first. Drink water, oral rehydration salts (available at all farmacias), or clear broths. Rest and avoid solid foods until nausea subsides, then gradually reintroduce bland foods like rice, toast, and bananas. Over-the-counter medications such as loperamide can help with diarrhea, though avoid them if you have a fever or bloody stools. If symptoms are severe (persistent vomiting, high fever, bloody diarrhea, signs of severe dehydration), visit a clinic such as IMS Medical or one of the private clinics in the Calvia area. For emergencies, call 112. Most food poisoning cases resolve within 24 to 48 hours with supportive care. Keep receipts from any restaurants involved in case you need to make an insurance claim.',
    category: 'Common Health Problems',
  },
  {
    question: 'How to prevent sunburn and heatstroke in Mallorca\'s summer?',
    answer:
      'Mallorca\'s summer temperatures regularly exceed 35 degrees Celsius, with UV index levels reaching 9 to 11 (very high to extreme). Use broad-spectrum SPF 30 or higher sunscreen, reapplying every 2 hours and after swimming. Wear a wide-brimmed hat, UV-protective sunglasses, and lightweight long-sleeved clothing during peak sun hours from 12pm to 4pm. Seek shade during these hours, especially for children and elderly visitors. Drink at least 2 to 3 litres of water daily, more if physically active. Calvia beaches provide umbrella and sunbed rentals for shade. Signs of heatstroke include confusion, hot dry skin, rapid pulse, and loss of consciousness. This is a medical emergency: call 112 immediately, move the person to shade, and cool them with wet cloths while waiting for help.',
    category: 'Common Health Problems',
  },
  {
    question: 'Are mosquitoes a problem in Mallorca and how to avoid bites?',
    answer:
      'Mosquitoes are present in Mallorca, particularly during warm summer evenings from June to September. The Asian tiger mosquito (Aedes albopictus) is active during daytime hours and can deliver painful bites. Use insect repellent containing DEET (20 to 30 percent concentration) or picaridin on exposed skin, wear long sleeves and trousers in the evenings, and use plug-in repellent devices in your accommodation. Rural areas around Calvia, near standing water sources and gardens, tend to have higher mosquito populations. While mosquito-borne diseases remain very rare in Mallorca, bites can cause allergic reactions and secondary infections from scratching. Antihistamine cream and oral antihistamines from local pharmacies provide effective relief for itching.',
    category: 'Common Health Problems',
  },
  {
    question: 'What insect repellents are best for ticks and bugs in Mallorca?',
    answer:
      'For ticks and general insects in Mallorca, DEET-based repellents (20 to 50 percent concentration) offer the strongest and longest-lasting protection. Picaridin (also known as icaridin) at 20 percent is an effective and less irritating alternative, particularly for sensitive skin and children. For hiking in the Serra de Tramuntana or Calvia\'s inland trails, tuck trousers into socks, wear light-coloured clothing to spot ticks easily, and perform a thorough body check after each hike. Remove ticks carefully with fine-tipped tweezers, grasping close to the skin and pulling steadily upward without twisting. Lyme disease is rare but present in Spain, so monitor any bite site for an expanding red rash over the following weeks. Consult a doctor if a rash develops or you experience flu-like symptoms after a tick bite.',
    category: 'Common Health Problems',
  },
  {
    question: 'How to handle jellyfish stings on Mallorca beaches?',
    answer:
      'If stung by a jellyfish on a Mallorca beach, rinse the affected area with seawater (never fresh water, which can activate remaining stinging cells). Carefully remove any visible tentacles using tweezers or the edge of a credit card. Apply vinegar if available, as it can deactivate stinging cells of most Mediterranean jellyfish species. Do not rub the area with sand or towels. Apply ice wrapped in cloth for pain relief. The Portuguese man-of-war (Physalia physalis) is rare but occasionally appears in Balearic waters and causes more severe stings requiring medical attention. Calvia beaches display flag warning systems, and lifeguards can assist with first aid during supervised hours. Seek medical help at the nearest health centre if you experience difficulty breathing, chest pain, or severe allergic reaction after a sting.',
    category: 'Common Health Problems',
  },
  {
    question: 'Is tap water safe to drink in Mallorca?',
    answer:
      'Yes, tap water in Mallorca meets all EU safety standards and is safe to drink. However, the island\'s desalinated and mineral-rich water supply gives it a distinctive salty or chalky taste that many visitors find unpleasant. As a result, most residents and tourists prefer bottled water for drinking. Calvia hotels and restaurants serve safe tap water, and many restaurants will provide a jug of tap water free of charge alongside bottled options. If you want to reduce plastic waste, consider a reusable water bottle with a carbon filter to improve the taste. The water is perfectly safe for cooking, brushing teeth, and making ice. Some newer buildings in Calvia have installed reverse osmosis filtration systems that significantly improve taste.',
    category: 'Common Health Problems',
  },
  {
    question: 'What are signs of dehydration during a Mallorca holiday?',
    answer:
      'Early signs of dehydration include increased thirst, dry mouth, darker-coloured urine, fatigue, dizziness, and headache. In Mallorca\'s heat, dehydration can develop quickly, especially during outdoor activities, beach days, or after consuming alcohol. More serious symptoms include rapid heartbeat, sunken eyes, confusion, and very infrequent urination. Prevent dehydration by drinking 2 to 3 litres of water daily, increasing intake during physical activity or high temperatures. Carry a water bottle at all times and drink before you feel thirsty. Oral rehydration salts from Calvia pharmacies are effective for replenishing electrolytes after heavy sweating or mild gastric illness. Children and elderly visitors are particularly vulnerable and should be monitored closely during hot weather.',
    category: 'Common Health Problems',
  },
  {
    question: 'How to prevent altitude sickness in Mallorca\'s mountains?',
    answer:
      'Altitude sickness is not a significant concern in Mallorca, as the island\'s highest peak (Puig Major in the Serra de Tramuntana) reaches only 1,445 metres above sea level, well below the threshold where altitude sickness typically occurs (above 2,500 metres). However, hikers in Calvia\'s nearby Tramuntana trails should still take precautions for general mountain safety: stay well hydrated, wear appropriate footwear, carry a charged phone with the 112 emergency number saved, inform someone of your planned route, and check weather conditions before setting out. Heat and dehydration at moderate altitudes during summer can mimic some altitude sickness symptoms such as headache and nausea. Rest in shade and drink water if you feel unwell during a hike.',
    category: 'Common Health Problems',
  },
  {
    question: 'What is the emergency number in Mallorca?',
    answer:
      'The universal European emergency number is 112 and works for all emergencies in Mallorca including medical, fire, and police. Operators speak English, Spanish, German, and French. For medical emergencies specifically, you can also call 061, which connects directly to the Balearic Islands ambulance dispatch service (SAMU). In Calvia, the local police (Policia Local) can be reached at 092. The Guardia Civil (national police covering rural areas) is 062. All emergency calls from mobile phones are free, even without a SIM card or credit. When calling 112, clearly state your location, the nature of the emergency, and the number of people affected. Response times in the Calvia area are generally fast, with ambulances typically arriving within 10 to 20 minutes.',
    category: 'Emergency Services & Medical Access',
  },
  {
    question: 'How do I see a doctor as a tourist in Mallorca?',
    answer:
      'As a tourist, you have several options for seeing a doctor in Mallorca. With a valid GHIC (UK) or EHIC (EU), you can access Spanish public healthcare at any centro de salud (health centre) on the same terms as a local resident. You will need to register at the front desk and may experience a wait. For faster service with guaranteed English-speaking staff, private clinics are the preferred choice for most tourists. In Calvia, the British Medical Centre in Palmanova and several clinics in Santa Ponsa offer walk-in and appointment-based consultations, typically costing 60 to 120 euros without insurance. Private clinics often offer 24/7 availability or extended hours. Many hotels in the Calvia area also have arrangements with local doctors who can provide in-room consultations. Always carry your travel insurance documentation to streamline any private medical visit.',
    category: 'Emergency Services & Medical Access',
  },
  {
    question: 'Where are the best hospitals in Palma de Mallorca?',
    answer:
      'Hospital Universitari Son Espases is the top public hospital in the Balearic Islands, serving as the reference centre for complex emergencies, trauma, and specialist care. Located in Palma, it is approximately 15 to 25 minutes from most Calvia villages. For private hospital care with shorter wait times and English-speaking staff, Clinica Rotger (strong in cardiology and orthopaedics) and Hospital Quironsalud Palmaplanas (convenient from Palmanova and Magaluf) are excellent options. Hospital Juaneda Miramar is the most popular private hospital among expats, owned by the Asisa insurance group. Clinica Juaneda in central Palma is another option within the same group. All major private hospitals accept the main insurance providers (Sanitas, Asisa, Adeslas, DKV). Son Espases is free with GHIC, EHIC, or Spanish social security.',
    category: 'Emergency Services & Medical Access',
  },
  {
    question: 'Does my EHIC/GHIC cover medical care in Mallorca?',
    answer:
      'Yes, the European Health Insurance Card (EHIC) for EU citizens or the Global Health Insurance Card (GHIC) for UK residents covers necessary state healthcare during a temporary stay in Mallorca. This includes emergency treatment, GP consultations at public health centres, hospital treatment, and prescribed medications (with the standard Spanish co-payment on prescriptions). It does not cover private hospital treatment, dental care (except emergency), repatriation, mountain rescue, or non-emergency medical transport. It is not a substitute for travel insurance. Apply for a GHIC free of charge through the NHS website (UK) or obtain an EHIC through your national health authority. Present the card at registration in any public health facility. Some private clinics will not accept GHIC or EHIC, so confirm before treatment.',
    category: 'Emergency Services & Medical Access',
  },
  {
    question: 'What if I need an ambulance in Mallorca?',
    answer:
      'Call 112 (general emergencies) or 061 (medical emergencies and ambulance dispatch) for an ambulance in Mallorca. The SAMU ambulance service covers the entire island and provides both basic life support and advanced life support units. Ambulance response is free when called to a genuine emergency, and GHIC or EHIC holders are covered for ambulance transport to a public hospital. In Calvia, response times are typically 10 to 20 minutes depending on location and traffic. When calling, give your exact location (hotel name, street address, or nearby landmark), describe the patient\'s condition, and stay on the line for instructions. Private ambulance services are also available for non-emergency transfers between hospitals or from hotels to clinics.',
    category: 'Emergency Services & Medical Access',
  },
  {
    question: 'How to find an English-speaking doctor in Mallorca?',
    answer:
      'English-speaking doctors are widely available in Mallorca\'s tourist and expat areas. In Calvia, the British Medical Centre in Palmanova is a well-known clinic staffed by English-speaking GPs and specialists. Doctor 24 Hours offers multilingual house calls throughout the Palmanova, Magaluf, and Santa Ponsa area. IMS Medical provides both clinic and hotel-based consultations. For private insurance holders, log into your insurer\'s app (Sanitas, Asisa, Adeslas) and filter by language when searching for doctors in the Calvia area. Hospital Juaneda Miramar in Palma has a dedicated international patient department with multilingual coordinators. Online directories such as Doctoralia.es allow you to search by language and speciality. Many pharmacies in tourist areas also have English-speaking staff who can recommend nearby doctors.',
    category: 'Emergency Services & Medical Access',
  },
  {
    question: 'What pharmacies are open 24/7 in Mallorca?',
    answer:
      'Mallorca operates a rotating duty pharmacy (farmacia de guardia) system, meaning at least one pharmacy in each area is open 24 hours on any given night and on public holidays. In the Calvia area, Farmacia Frau in Palma Nova is a reliable option during regular hours. To find the nearest open pharmacy at any time, check the green illuminated cross signs displayed outside every pharmacy showing the nearest on-duty location, use the Farmaguia app, or search online for "farmacia de guardia Calvia" or "farmacia de guardia Palma". You can also call 098 for pharmacy information. Duty pharmacies charge a small supplementary fee (around 3 to 4 euros) for purchases made during overnight hours. Stock up on essential medications and sun protection during regular pharmacy hours to avoid needing after-hours service.',
    category: 'Emergency Services & Medical Access',
  },
  {
    question: 'How to get prescriptions filled in Mallorca as a visitor?',
    answer:
      'Bring your prescription with you, ideally listing the medication by its generic (international) name rather than the brand name, as brand names vary between countries. EU prescriptions are legally valid in Spain under the cross-border healthcare directive, though some pharmacists may need clarification on unfamiliar formats. UK prescriptions are generally accepted at Spanish pharmacies post-Brexit, but carrying a letter from your GP with the generic medication name, dosage, and reason for prescription is helpful. Many common medications that require a prescription in the UK are available over the counter in Spanish pharmacies (such as certain antibiotics, antihistamines, and anti-inflammatory drugs), making access easier. In Calvia, pharmacists frequently serve international visitors and many speak English. For controlled medications (strong painkillers, benzodiazepines), bring sufficient supply from home plus a doctor\'s letter.',
    category: 'Emergency Services & Medical Access',
  },
  {
    question: 'What to do in a medical emergency on a Mallorca beach?',
    answer:
      'Alert the lifeguards immediately if present (Calvia\'s main beaches including Santa Ponsa, Palmanova, Magaluf, and Peguera are staffed during summer season, typically May to October). Call 112 for emergency services and clearly describe your location (beach name, nearest access point, or landmark). Calvia\'s major beaches have first-aid posts (puestos de socorro) equipped to handle common emergencies including drowning, cardiac events, jellyfish stings, and fractures. If someone is drowning, do not enter the water unless you are a trained rescuer. Perform CPR if the person is unresponsive and not breathing, following the 112 operator\'s telephone instructions. Beach access paths in Calvia are generally well-maintained to allow ambulance access close to the shoreline.',
    category: 'Emergency Services & Medical Access',
  },
  {
    question: 'Are there private clinics for tourists in Mallorca?',
    answer:
      'Yes, Mallorca has an extensive network of private clinics catering to tourists and expats. In the Calvia area, several well-established clinics offer English, German, and Scandinavian language services with both walk-in and appointment options. The Juaneda hospital group operates multiple facilities across Palma accessible from Calvia within 20 to 30 minutes. Quironsalud Palmaplanas is conveniently located for visitors staying in Palmanova or Magaluf. Private consultation fees typically range from 60 to 120 euros for a GP visit. Many clinics offer extended hours and weekend availability during the tourist season. Most accept international travel insurance directly, or you can pay out of pocket and claim reimbursement. Hotel reception desks in Calvia can usually recommend and arrange appointments with nearby private clinics.',
    category: 'Emergency Services & Medical Access',
  },
  {
    question: 'How to manage allergies like nuts or shellfish in Mallorca?',
    answer:
      'Spanish law (EU Regulation 1169/2011) requires restaurants and food establishments to provide allergen information for the 14 major allergens, including nuts, shellfish, gluten, dairy, eggs, and soy. In practice, most restaurants in Calvia display allergen menus or can provide information on request. Always inform your waiter clearly about your allergies, and learn the key Spanish phrases: "Tengo alergia a los frutos secos" (I am allergic to nuts) or "Tengo alergia al marisco" (I am allergic to shellfish). Carry your epinephrine auto-injector (EpiPen) at all times with a doctor\'s letter explaining the prescription. Spanish pharmacies stock adrenaline auto-injectors but may require a prescription. Calvia\'s seafood-heavy cuisine means shellfish is common in many dishes, so always ask before ordering paella, tapas, or mixed dishes.',
    category: 'Allergies & Chronic Conditions',
  },
  {
    question: 'Is celiac disease easy to handle with gluten-free food in Mallorca?',
    answer:
      'Mallorca has increasingly good options for coeliac travellers. The Spanish Coeliac Association (FACE) certifies restaurants and food products with the "Controlado por FACE" label. In Calvia, many supermarkets including Mercadona, Eroski, and Lidl have dedicated gluten-free sections with clearly labelled "sin gluten" products. Restaurants in tourist areas are generally well-informed about gluten-free requirements, and several in Santa Ponsa, Palmanova, and Portals Nous offer dedicated gluten-free menus. Traditional Mallorcan cuisine includes naturally gluten-free dishes based on rice, seafood, vegetables, and olive oil. When dining out, ask "Tienen opciones sin gluten?" and be specific about cross-contamination concerns. Bakeries specialising in gluten-free bread and pastries have opened in Palma and some Calvia locations.',
    category: 'Allergies & Chronic Conditions',
  },
  {
    question: 'What about asthma and air quality in Mallorca?',
    answer:
      'Air quality in Mallorca is generally excellent compared to major European cities, with clean Mediterranean sea breezes keeping pollution levels low. However, pollen counts can be very high during spring (February to June), particularly from olive trees, pine, Parietaria (pellitory-of-the-wall), and grasses, which can trigger asthma and hay fever. Check daily pollen forecasts on the Spanish Aerobiology Network (REA) website or apps like Pollen.com. Always carry your reliever inhaler and ensure your preventer inhaler supply is sufficient for your trip. The dry summer heat can also trigger asthma in some individuals. Air-conditioned hotels and restaurants in Calvia provide good respite. Pharmacies stock common asthma medications, and many inhalers that require a prescription in the UK are available over the counter in Spain.',
    category: 'Allergies & Chronic Conditions',
  },
  {
    question: 'How safe is Mallorca for pregnant travellers?',
    answer:
      'Mallorca is generally safe for pregnant travellers with standard precautions. Avoid excessive heat exposure, stay well hydrated, wear comfortable shoes on uneven terrain, and apply sunscreen liberally (some pregnancy-safe formulations are available at Calvia pharmacies). The island has excellent maternity services at Hospital Universitari Son Espases (public) and Hospital Juaneda Miramar (private). Check with your airline regarding flying restrictions, as most airlines restrict travel after 36 weeks for single pregnancies and 32 weeks for multiples. Carry your maternity notes and a letter from your midwife or obstetrician. Ensure your travel insurance explicitly covers pregnancy-related complications. Avoid unpasteurised cheese (queso fresco), undercooked meats, and raw seafood to reduce listeria and toxoplasmosis risk.',
    category: 'Allergies & Chronic Conditions',
  },
  {
    question: 'What health risks for seniors visiting Mallorca?',
    answer:
      'Senior travellers to Mallorca should be particularly mindful of heat-related illness, as temperatures can exceed 35 degrees Celsius in summer. Stay hydrated, avoid midday sun, and wear light breathable clothing. Falls are a common risk on uneven cobblestone streets, stone steps, and pool areas. Wear sturdy, non-slip footwear. Calvia has several beaches with accessibility features including ramps and adapted bathing chairs (notably in Palmanova and Santa Ponsa). Ensure all medications are packed in carry-on luggage with a clear list of prescriptions. The GHIC or EHIC provides access to public healthcare, but private insurance is recommended for faster English-speaking service. Heart conditions and blood pressure issues can be aggravated by heat and altitude changes. Stay cool, limit alcohol, and know the nearest hospital location.',
    category: 'Allergies & Chronic Conditions',
  },
  {
    question: 'How to manage diabetes during a trip to Mallorca?',
    answer:
      'Pack double the supplies you expect to need (insulin, test strips, lancets, glucose tablets, pump supplies) split between carry-on and checked luggage. Carry a doctor\'s letter explaining your condition and the need for needles and medication, particularly for airport security. Insulin should always be kept in hand luggage as cargo hold temperatures can damage it. Keep insulin cool using an insulated travel case, especially in Mallorca\'s summer heat. Maintain regular meal schedules where possible and be aware that Spanish mealtimes are later than northern European norms (lunch at 2pm, dinner at 9pm). Calvia pharmacies stock insulin and diabetic supplies, including major brands. Blood glucose monitors and test strips are available without prescription. Wear a medical alert bracelet and inform travel companions about hypoglycaemia symptoms and glucagon administration.',
    category: 'Allergies & Chronic Conditions',
  },
  {
    question: 'What about heart conditions and heat in Mallorca?',
    answer:
      'Mallorca\'s summer heat places additional strain on the cardiovascular system, making precautions essential for visitors with heart conditions. Avoid outdoor exertion during the hottest hours (12pm to 4pm), stay in air-conditioned environments when possible, and drink plenty of water to prevent dehydration, which thickens the blood and increases clot risk. Limit alcohol and caffeine intake in hot weather. Carry your medication list and a recent ECG report if available. Know the location of the nearest hospital: from Calvia, Hospital Universitari Son Espases (public, full cardiac unit) and Clinica Rotger (private, excellent cardiology department) in Palma are both within 20 to 30 minutes. Call 112 immediately for any chest pain, shortness of breath, or palpitations. The SAMU ambulance service carries cardiac monitoring equipment and defibrillators.',
    category: 'Allergies & Chronic Conditions',
  },
  {
    question: 'How to deal with hangovers or alcohol-related issues in Mallorca?',
    answer:
      'Alcohol-related health issues are common in Calvia\'s nightlife areas, particularly Magaluf. Prevention is key: alternate alcoholic drinks with water, eat a substantial meal before drinking, pace yourself, and know your limits. Spanish measures for spirits are often more generous than in the UK. If you experience a severe hangover, rehydrate with water and oral rehydration salts from a pharmacy, eat bland foods, and rest. Seek medical attention for symptoms of alcohol poisoning including confusion, vomiting while unconscious, seizures, slow or irregular breathing, and hypothermia. Call 112 for emergencies. Several private clinics in the Calvia area offer IV rehydration therapy for severe hangovers (not covered by insurance). Be aware that public intoxication can result in fines from local police.',
    category: 'Common Health Problems',
  },
  {
    question: 'Are there any outbreaks or health alerts in Mallorca right now?',
    answer:
      'As of February 2026, there are no major disease outbreaks or health emergencies reported in Mallorca. However, travellers should remain aware of ongoing monitoring for measles outbreaks across Europe and periodic polio detections via wastewater surveillance. Check the CDC Travellers\' Health page, the ECDC (European Centre for Disease Prevention and Control), and the Spanish Ministry of Health websites for the latest updates before travelling. Seasonal concerns include high pollen counts in spring, extreme heat advisories in July and August, and occasional algae blooms on certain beaches. Calvia\'s local government publishes beach water quality reports regularly during the swimming season. Sign up for travel health alerts through your country\'s foreign affairs department for real-time notifications.',
    category: 'Common Health Problems',
  },
  {
    question: 'What about mental health support for tourists in Mallorca?',
    answer:
      'Mental health support options for tourists in Mallorca are limited but growing. For immediate crisis situations, call 112 or the Telefono de la Esperanza (024), Spain\'s national mental health helpline operating 24/7 with some English-speaking operators. Several private psychologists and therapists in the Calvia area offer sessions in English, German, and other languages, with rates typically between 60 to 100 euros per session. Calvia\'s wellness retreats, such as those offering mindfulness, meditation, and yoga programmes, can provide therapeutic support for stress and anxiety. Some hotels have partnerships with wellness professionals who can arrange confidential consultations. For ongoing mental health medication, bring sufficient supply plus your prescription. If you need to refill psychiatric medication in Spain, a private GP consultation can provide a local prescription.',
    category: 'Allergies & Chronic Conditions',
  },
  {
    question: 'How to prevent skin issues from sun and salt water in Mallorca?',
    answer:
      'The combination of strong Mediterranean sun, salt water, and chlorinated pools can take a toll on skin during a Mallorca holiday. Use a broad-spectrum SPF 30 or higher sunscreen suitable for your skin type, reapplying every two hours and immediately after swimming. After beach or pool sessions, rinse with fresh water to remove salt and chlorine residues, then apply a hydrating moisturiser or aloe vera-based after-sun product. Calvia beaches with outdoor showers make rinsing convenient. For existing skin conditions like eczema or psoriasis, salt water can actually be beneficial, but sun exposure requires careful management. Carry your prescribed topical treatments. Local pharmacies stock excellent dermatological products from brands like Avene, La Roche-Posay, and ISDIN (a Spanish brand particularly effective for sun protection). Seek medical advice for any new or changing skin lesions.',
    category: 'Common Health Problems',
  },
  {
    question: 'Is smoking allowed in public places in Mallorca?',
    answer:
      'Spain has strict anti-smoking legislation. Smoking is completely banned in all enclosed public spaces including restaurants, bars, offices, shops, and public transport. Smoking on outdoor restaurant and bar terraces is permitted in most cases, though individual establishments may restrict it. Since 2021, the Balearic Islands have implemented additional restrictions banning smoking on certain beaches (check local signage in Calvia). Smoking near hospital entrances and school perimeters is also prohibited. Electronic cigarettes and vaping are subject to the same indoor restrictions. Fines for smoking in prohibited areas range from 30 to 600 euros. If you are trying to quit, Spanish pharmacies sell nicotine replacement products (patches, gum, lozenges) without prescription, and some offer smoking cessation advice.',
    category: 'General Safety & Tips',
  },
  {
    question: 'What hiking safety tips for health in Mallorca\'s Serra de Tramuntana?',
    answer:
      'The Serra de Tramuntana, a UNESCO World Heritage site near Calvia, offers stunning hiking but requires preparation. Wear proper hiking boots with ankle support, carry at least 2 litres of water per person (more in summer), and bring sun protection including hat, sunscreen, and sunglasses. Download offline maps (Google Maps, Wikiloc, or AllTrails) as mobile signal can be patchy in mountain valleys. Start hikes early in summer to avoid peak heat. Inform someone of your planned route and expected return time. Carry a basic first aid kit including blister plasters, antiseptic wipes, and any personal medications. The emergency number 112 works from most elevated positions. Mountain rescue is provided by the Guardia Civil\'s mountain rescue service (GREIM). Common hazards include loose rock, steep drops, heat exhaustion, and dehydration. Stick to marked trails and check weather forecasts before setting out.',
    category: 'General Safety & Tips',
  },
  {
    question: 'How to stay healthy while partying in Magaluf or Ibiza-style in Mallorca?',
    answer:
      'Calvia\'s Magaluf is one of Europe\'s busiest nightlife destinations. To stay healthy: eat a proper meal before going out, stay hydrated by alternating alcohol with water, never leave drinks unattended, stick with your group, and set a personal limit on alcohol consumption. Avoid mixing alcohol with energy drinks or other substances. Wear comfortable footwear to prevent falls on uneven streets. The local authority has implemented regulations to limit excessive drinking, including restrictions on pub crawls and happy hours. If you or someone in your group feels unwell, several private clinics in the Magaluf area are open extended hours during summer. For emergencies, call 112. The Calvia town council operates safety patrols in Magaluf during peak season. Keep your accommodation address written down in case you need to find your way back.',
    category: 'General Safety & Tips',
  },
  {
    question: 'What wellness spas or health retreats are in Mallorca?',
    answer:
      'Mallorca offers a rich wellness scene ranging from luxury resort spas to independent holistic retreats. In the Calvia area, Alua Wellness provides day spa packages including hydrotherapy, massages, and body treatments. The St. Regis Mardavall Resort in Costa d\'en Blanes features the Iridium Spa with thalassotherapy, Ayurvedic treatments, and bespoke wellness consultations. The Elba Sunset in Palmanova offers accessible thalassotherapy circuits from approximately 150 euros per night. For immersive retreat experiences, Cal Reiet Holistic Retreat in Santanyi (45 minutes from Calvia) combines yoga, meditation, and organic cuisine. Finca Serena near Montuiri offers multi-day wellness programmes from 300 euros per night. Independent yoga instructors and wellness practitioners throughout Calvia organise beach yoga, forest bathing in the Tramuntana, and personalised wellness weekends. Calvia Health can coordinate multi-provider wellness experiences through our free matching service.',
    category: 'Wellness, Fitness & Lifestyle',
  },
  {
    question: 'Are there gyms or fitness options for staying healthy in Mallorca?',
    answer:
      'Mallorca has excellent fitness infrastructure for health-conscious visitors and residents. In Calvia, major hotels such as Melia Calvia Beach and the Iberostar selection offer well-equipped gyms accessible to guests. Independent gyms in Santa Ponsa, Palmanova, and Magaluf offer day passes (typically 10 to 15 euros) and weekly memberships (30 to 50 euros). For outdoor fitness, Calvia\'s coastal paths and cycle routes are ideal for running, cycling, and walking. The Calvia municipality maintains several outdoor fitness stations (circuitos deportivos) with free-to-use equipment in parks. CrossFit boxes, Pilates studios, and martial arts gyms operate throughout the area. Personal trainers in Calvia offer one-on-one sessions (40 to 80 euros per hour) for hotel or beach workouts. The island is famous for professional cycling, with many visitors renting road bikes to explore Calvia\'s rolling terrain and the Tramuntana mountains.',
    category: 'Wellness, Fitness & Lifestyle',
  },
  {
    question: 'How to handle rainy day health issues like colds in Mallorca?',
    answer:
      'While Mallorca enjoys over 300 sunny days per year, rainy periods do occur, particularly in autumn and winter. Colds and minor respiratory infections can develop from temperature changes between air-conditioned buildings and outdoor heat, or from spending time in crowded indoor venues. Spanish pharmacies are well-stocked with cold and flu remedies, including paracetamol, ibuprofen, decongestants, and throat lozenges, many available without prescription. Vitamin C supplements and zinc lozenges are popular preventative options. If symptoms worsen to include high fever, difficulty breathing, or persistent cough, visit a local clinic. Rest, fluids, and over-the-counter medications resolve most mild respiratory infections within a few days. Calvia\'s indoor wellness options including spa visits, yoga classes, and swimming pools offer healthy activities during inclement weather.',
    category: 'Common Health Problems',
  },
  {
    question: 'What vegetarian or vegan health tips for eating in Mallorca?',
    answer:
      'Mallorca\'s dining scene has embraced vegetarian and vegan cuisine, with growing options across Calvia. Traditional Mallorcan cuisine includes many naturally plant-based dishes such as tumbet (layered vegetables in tomato sauce), pa amb oli (bread with tomato and olive oil), and ensalada Mallorquina. In Santa Ponsa, Palmanova, and Portals Nous, several restaurants offer dedicated vegetarian and vegan menus. Supermarkets stock plant-based milks, tofu, tempeh, and vegan convenience foods. For balanced nutrition during your stay, ensure adequate protein from legumes, nuts, and seeds alongside Mediterranean vegetables and whole grains. B12 supplementation is important for strict vegans, available at any Calvia pharmacy. Iron-rich foods like spinach, lentils, and fortified cereals help prevent travel fatigue. Local health food shops (herbolarios) stock specialist supplements and organic products.',
    category: 'Wellness, Fitness & Lifestyle',
  },
  {
    question: 'How safe is cycling in Mallorca for health and accidents?',
    answer:
      'Mallorca is one of Europe\'s premier cycling destinations, attracting professionals and amateurs alike to its varied terrain. Safety essentials: always wear a helmet (legally required outside urban areas in Spain), use front and rear lights, wear high-visibility clothing, and carry water and nutrition. Calvia\'s roads are generally well-maintained with good surfaces, though watch for gravel on corners and narrow mountain roads. Cycle in single file on public roads and use designated cycle lanes where available. In case of an accident, call 112 and do not move the injured person unless there is immediate danger. Many Calvia bike rental shops include basic insurance and provide route maps highlighting safer roads. Stay hydrated, apply sunscreen, and avoid cycling during the hottest afternoon hours in summer. Consider travel insurance that specifically covers cycling accidents and repatriation of sports equipment.',
    category: 'Wellness, Fitness & Lifestyle',
  },
  {
    question: 'What family health advice for kids vacationing in Mallorca?',
    answer:
      'Ensure children\'s vaccinations are up to date before travelling, paying particular attention to MMR and hepatitis A. Apply child-appropriate sunscreen (SPF 50 recommended for children) frequently and generously, and keep babies under 6 months out of direct sunlight entirely. Insect repellent formulations for children (lower DEET concentrations or plant-based alternatives) are available at Calvia pharmacies. Enforce regular handwashing, especially before meals and after beach play. Pack a basic travel health kit including children\'s paracetamol, antihistamine syrup, rehydration salts, plasters, and antiseptic cream. Calvia beaches with Blue Flag status (Palmanova, Santa Ponsa) are excellent for families as they have lifeguards, clean facilities, and calm swimming areas. Know the location of the nearest family clinic and keep your insurance details accessible. Spanish pharmacies are excellent resources for paediatric health advice and children\'s medications.',
    category: 'General Safety & Tips',
  },
];

export const HOMEPAGE_FAQ_DATA: FAQItem[] = [
  {
    question: 'How much does private health insurance cost in Mallorca for expats?',
    answer:
      'Private health insurance premiums in Mallorca vary significantly based on age, coverage level, and whether you choose a co-payment (copago) plan. As a general guide for comprehensive coverage: ages 25-35 pay approximately 45 to 80 euros per month, ages 35-45 pay 60 to 110 euros, ages 45-55 pay 80 to 160 euros, ages 55-65 pay 120 to 250 euros, and over 65s pay 200 to 400+ euros per month. Co-payment plans (where you pay a small fee per visit, typically 5-15 euros for a GP and 15-30 euros for a specialist) reduce monthly premiums by 20 to 40 percent. The major providers in Mallorca are Sanitas, Asisa, Adeslas, and DKV. Sanitas offers strong digital services and the widest hospital network. Asisa owns the Juaneda hospital group, which operates Hospital Juaneda Miramar — the most-used private hospital among Calvia residents. Most policies include GP and specialist consultations, hospital treatment, diagnostic tests, basic dental, and physiotherapy. Pre-existing conditions are typically covered after a waiting period of 6 to 12 months. We recommend getting quotes from at least three providers and checking that the doctors and hospitals you want to use are within the insurer\'s network before committing.',
    category: 'Doctors, Insurance & Prescriptions',
  },
  {
    question: 'Can I see an English-speaking doctor in Calvia without insurance?',
    answer:
      'Yes, you can see an English-speaking doctor in Calvia without insurance, but you will need to pay out of pocket. Private GP consultations in the Calvia area typically cost 60 to 120 euros per visit. Many private clinics in Portals Nous, Santa Ponsa, and Palmanova have multilingual staff including English, German, and Scandinavian-speaking doctors who are accustomed to treating the international community. Some well-established options include clinics affiliated with the Juaneda and Quironsalud hospital groups, as well as independent medical practices that specifically cater to expats. If you have a European Health Insurance Card (EHIC or the UK\'s GHIC), you can access the Spanish public healthcare system for temporary stays, though English-speaking staff in public health centers (centros de salud) is less guaranteed. For non-EU visitors without any insurance, emergency care is always provided regardless of insurance status — Spanish law requires emergency departments to treat everyone. However, non-emergency public healthcare requires either social security enrollment, an S1 form, or EHIC/GHIC. If you plan to stay in Mallorca for any extended period, arranging at least basic private health insurance is strongly recommended, as it provides access to a wider range of English-speaking doctors and eliminates the financial uncertainty of out-of-pocket payments.',
    category: 'Doctors, Insurance & Prescriptions',
  },
  {
    question: 'What is the best hospital near Calvia for emergencies?',
    answer:
      'For life-threatening emergencies, Hospital Universitari Son Espases is the reference hospital for the entire Balearic Islands. Located in Palma, it is approximately 15 to 25 minutes from most Calvia villages by car (faster by ambulance). It has a comprehensive emergency department with all medical and surgical specialties, a trauma unit, and an ICU. It is a public hospital, so treatment is free for anyone with social security, an S1 form, or EHIC/GHIC. For non-life-threatening emergencies where you want faster service and English-speaking staff, Hospital Juaneda Miramar (private, also in Palma, about 20 minutes from Calvia) is the preferred choice among expats. It typically has shorter wait times, private rooms, and multilingual doctors. Covered by most major private insurance policies. Clinica Rotger (private, central Palma) is another excellent option, particularly strong in cardiology and orthopedics. USP Clinica Palmaplanas is convenient from the Palmanova/Magaluf area. For urgent but non-emergency situations (high fever, minor injuries, infections), the Centro de Salud in Santa Ponsa and Palmanova both offer PAC (urgent care) services during evenings, weekends, and holidays. The European emergency number 112 works across Spain and operators speak English, Spanish, and German. The Balearic Islands medical emergency number is 061 for ambulance dispatch.',
    category: 'Doctors, Insurance & Prescriptions',
  },
  {
    question: 'Is dental treatment cheaper in Spain than the UK?',
    answer:
      'Dental treatment in Spain is generally 30 to 50 percent cheaper than equivalent treatment in the UK, making dental tourism a significant draw for expats and visitors to Mallorca. Typical prices at reputable dental clinics in the Calvia area: a standard check-up and cleaning costs 50 to 80 euros (compared to 65 to 130 GBP in the UK), a composite filling costs 60 to 100 euros (compared to 70 to 150 GBP), a dental crown costs 300 to 600 euros (compared to 500 to 1,000 GBP), a single dental implant including crown costs 1,200 to 2,500 euros (compared to 2,000 to 3,500 GBP), and teeth whitening costs 200 to 400 euros (compared to 300 to 800 GBP). The quality of dental care in Mallorca is excellent. Spanish dentists complete a 5-year university degree (Odontologia) and clinics are regulated by the Consejeria de Salud. Many dental clinics in Calvia use the latest technology including digital X-rays, 3D scanning, and CAD/CAM crown manufacturing. English-speaking dentists are common in the expat-heavy areas of Portals Nous, Santa Ponsa, and Bendinat. Private health insurance in Spain typically covers basic dental (check-ups, cleanings, X-rays) but not major work like implants or orthodontics. For expensive procedures, it is worth getting quotes from 2-3 clinics and checking whether your insurer offers any dental add-on coverage.',
    category: 'Doctors, Insurance & Prescriptions',
  },
  {
    question: 'What are the best wellness retreats near Palma de Mallorca?',
    answer:
      'Southwest Mallorca and the Calvia coast offer some of the island\'s finest wellness retreat experiences. At the luxury end, Finca Serena Mallorca (near Montuiri, about 40 minutes from Calvia) is a restored 13th-century estate offering multi-day wellness programs that combine yoga, meditation, spa treatments, and healthy Mediterranean cuisine. Their programs typically start from 300 euros per night including accommodation and wellness activities. Son Bunyola (Richard Branson\'s Mallorcan estate, near Banyalbufar) offers exclusive retreat experiences in a stunning Tramuntana mountain setting with private wellness programs. Closer to Calvia, the St. Regis Mardavall Resort in Costa d\'en Blanes has an Iridium Spa offering day and multi-day wellness packages with thalassotherapy, Ayurvedic treatments, and personalized wellness consultations. The Elba Sunset in Palmanova combines thalassotherapy circuits with hotel stays for accessible wellness weekends (from approximately 150 euros per night). For yoga-focused retreats, several independent practitioners in the Calvia area organize weekend and week-long yoga retreats, often combining studio sessions with outdoor practice on the beach or in the Tramuntana foothills. Prices for these range from 80 to 200 euros per day depending on accommodation level. For a truly comprehensive retreat experience, many visitors combine elements — a hotel wellness stay with external massage therapists, nutritionist consultations, and personal training sessions. Calvia Health can coordinate these multi-provider experiences through our free matching service.',
    category: 'Wellness, Fitness & Lifestyle',
  },
  {
    question: 'Do I need health insurance to live in Mallorca?',
    answer:
      'Strictly speaking, there is no general legal mandate requiring all residents of Spain to hold health insurance. However, there are several situations where health insurance is effectively required. For non-EU citizens applying for a visa or residency permit (including the non-lucrative visa popular among retirees and remote workers), proof of comprehensive health insurance is a mandatory requirement of the application. The insurance must cover you in Spain with no co-payments and with coverage of at least 30,000 euros. For EU citizens, health insurance is required as part of the residency registration process if you are not working and contributing to social security — you need to demonstrate you will not become a burden on the Spanish healthcare system, which means showing either private insurance or an S1 form. For employed and self-employed residents contributing to Spanish social security, public healthcare is automatic and no additional insurance is legally required. That said, the vast majority of long-term expats in Calvia choose to hold at least basic private health insurance regardless of their public coverage status. The reasons are practical: faster access to specialists (days rather than weeks or months), English-speaking doctors, dental coverage (which the public system barely provides for adults), and the convenience of choosing your own doctor without referrals. Private premiums start from as little as 45 euros per month for younger adults. Given the peace of mind and practical benefits, most expat advisory services in Mallorca recommend private coverage as an essential cost of living.',
    category: 'Doctors, Insurance & Prescriptions',
  },
  {
    question: 'Can I get Lasik eye surgery in Mallorca and how much does it cost?',
    answer:
      'Yes, Lasik and other refractive eye surgeries are available from several experienced ophthalmologists in Mallorca. The main providers are Clinica Oftalmologica in Palma, the ophthalmology departments at Hospital Juaneda Miramar and Clinica Rotger, and independent specialists operating from private clinics. Costs for Lasik in Mallorca typically range from 800 to 1,500 euros per eye, depending on the technique used and the clinic. Standard Lasik (microkeratome) is at the lower end, while Femtosecond laser-assisted Lasik (bladeless) and SMILE procedures are at the higher end. PRK (photorefractive keratectomy), an alternative to Lasik suitable for thinner corneas, costs 600 to 1,200 euros per eye. These prices are generally 20 to 40 percent lower than equivalent procedures in the UK, Germany, or Scandinavia, making Mallorca an attractive option for vision correction. The pre-surgery assessment (which determines your suitability) typically costs 80 to 150 euros and includes corneal topography, pachymetry (corneal thickness measurement), pupillometry, and a comprehensive eye examination. Not everyone is a candidate — factors like corneal thickness, prescription stability, and eye health all affect eligibility. Most private health insurance policies in Spain do not cover Lasik as it is considered elective. However, some insurers offer optional vision add-ons that partially cover refractive surgery. The procedure itself takes about 15 minutes per eye, with most patients returning to normal activities within 24 to 48 hours. Follow-up appointments are typically scheduled at 1 day, 1 week, 1 month, and 3 months post-surgery.',
    category: 'Doctors, Insurance & Prescriptions',
  },
  {
    question: 'What vaccinations do children need to attend school in Mallorca?',
    answer:
      'Spain has a recommended vaccination schedule (Calendario Vacunal) that, while not technically mandatory by national law, is required in practice by most schools in the Balearic Islands for enrollment. The Balearic Islands follow the national schedule with some regional additions. The standard childhood vaccination schedule includes: Hepatitis B (at birth, 2 months, 11 months), DTPa-IPV-Hib (diphtheria, tetanus, pertussis, polio, Haemophilus influenzae type b) at 2, 4, and 11 months with boosters at 6 and 14 years, Pneumococcal conjugate (PCV13) at 2, 4, and 11 months, MMR (measles, mumps, rubella) at 12 months and 3-4 years, Varicella (chickenpox) at 15 months and 3-4 years, Meningococcal B at 2, 4, and 12 months, Meningococcal ACWY at 12 months and 12 years, and HPV (human papillomavirus) at 12 years for both boys and girls. When enrolling children in school in Mallorca, you will need to present your child\'s vaccination record (cartilla de vacunacion). If your child was vaccinated in another country, the record needs to be translated and ideally presented alongside the Spanish schedule so the school nurse can verify equivalency. Many vaccinations administered in the UK, Germany, and other EU countries are equivalent, but the schedule may differ slightly — for example, the UK does not routinely vaccinate against varicella, while Spain does. If any vaccinations are missing, your pediatrician at the local health center can administer them. The public system provides all scheduled vaccinations free of charge. For expat families arriving with older children, it is advisable to schedule a pediatric appointment soon after arrival to review the vaccination record and catch up on any missing doses.',
    category: 'General Safety & Tips',
  },
];
