import serviceHormonal from "@/assets/service-hormonal.jpg";
import servicePreconception from "@/assets/service-preconception.jpg";
import servicePregnancy from "@/assets/service-pregnancy.jpg";
import serviceLactation from "@/assets/service-lactation.jpg";
import serviceChild from "@/assets/service-child.jpg";
import serviceMommy from "@/assets/service-mommy.jpg";

export interface SubProgram {
  title: string;
  servicePageDescription: string;
  bulletPoints: string[];
  popUpPageDescription: string[];
  whoThisIsFor: string[];
  whatWeDo: string[];
  outcomeFrame: string[];
}

export interface Program {
  id: string;
  title: string;
  image: string;
  shortDesc: string;
  description: string;
  subPrograms: SubProgram[];
}

export const programsData: Program[] = [
  {
    id: "hormonal-harmony",
    title: "Hormonal Harmony",
    image: serviceHormonal,
    shortDesc: "Designed to support those dealing with hormonal imbalances and PCOS.",
    description: "Our Hormonal Harmony program is specifically designed to support those dealing with hormonal imbalances, including PCOS. With tailored diet plans and expert guidance, we help regulate hormones, enhance energy levels, and promote overall well-being.",
    subPrograms: [
      {
        title: "Single Consultation",
        servicePageDescription: "An in-depth one-on-one consultation with a customized diet plan built around your lifestyle, goals, and health needs.",
        bulletPoints: [
          "In-depth personalized health consultation",
          "Lifestyle, diet & hormonal assessment",
          "Medical history blood report review",
          "Personalized guidance for balanced wellness"
        ],
        popUpPageDescription: [
          "Your hormones are not “in your head” — they are deeply rooted in your body’s biochemistry, metabolism, and daily rhythms.",
          "When they are out of balance, your body speaks through symptoms — irregular cycles, weight changes, mood shifts, skin concerns, and more.",
          "This program is designed to decode your hormonal blueprint and restore balance across your metabolism, thyroid, and insulin response — bringing back clarity, stability, and vitality.",
          "Through personalized nutrition, lifestyle alignment, and root-cause analysis, we move beyond quick fixes to create lasting hormonal harmony."
        ],
        whoThisIsFor: [
          "Women and adolescents experiencing PCOS/PCOD, irregular or painful cycles, PMS, acne, hirsutism, or unexplained weight gain",
          "Those dealing with insulin resistance (IR), thyroid imbalances (hypothyroidism/Hashimoto’s), or stubborn weight that doesn’t respond to diets",
          "Individuals struggling with fatigue, sugar cravings, mood swings, or metabolic slowdown linked to hormonal imbalance",
          "Anyone feeling stuck with “one-size-fits-all” diets, calorie restriction, or plans that ignore hormonal and metabolic health",
          "If you’ve ever been told to “just lose weight” or felt unheard — this program offers a deeply personalized, science-led, and compassionate roadmap to true hormonal balance"
        ],
        whatWeDo: [
          "Comprehensive Clinical Assessment",
          "Biochemical Report Analysis",
          "Precision Nutrition Design",
          "Targeted Supplement Strategy",
          "Lifestyle & Behavioral Coaching"
        ],
        outcomeFrame: [
          "Improved menstrual regularity (cycle length normalizes, ovulation returns)",
          "Lowered fasting insulin, improved IR (insulin resistance) and thyroid levels",
          "Reduction in androgenic symptoms: acne, hair growth, hirsutism",
          "Stabilized mood, reduced PMS/PMDD severity",
          "Sustainable weight regulation, based on metabolic rather than caloric fixes",
          "Improved energy, sleep quality, and cravings control",
          "Better long-term fertility markers, if that is a goal"
        ]
      },
      {
        title: "Metabolic Reset",
        servicePageDescription: "A 30-day structured program designed to initiate a sustainable metabolic transformation.",
        bulletPoints: [
          "In-depth consultation",
          "Fully customized nutrition plan",
          "Two guided follow-up sessions",
          "3 touchpoints every 8-10 days"
        ],
        popUpPageDescription: [
          "Your hormones are not “in your head” — they are deeply rooted in your body’s biochemistry, metabolism, and daily rhythms.",
          "When they are out of balance, your body speaks through symptoms — irregular cycles, weight changes, mood shifts, skin concerns, and more.",
          "This program is designed to decode your hormonal blueprint and restore balance across your metabolism, thyroid, and insulin response — bringing back clarity, stability, and vitality.",
          "Through personalized nutrition, lifestyle alignment, and root-cause analysis, we move beyond quick fixes to create lasting hormonal harmony."
        ],
        whoThisIsFor: [
          "Women and adolescents experiencing PCOS/PCOD, irregular or painful cycles, PMS, acne, hirsutism, or unexplained weight gain",
          "Those dealing with insulin resistance (IR), thyroid imbalances (hypothyroidism/Hashimoto’s), or stubborn weight that doesn’t respond to diets",
          "Individuals struggling with fatigue, sugar cravings, mood swings, or metabolic slowdown linked to hormonal imbalance",
          "Anyone feeling stuck with “one-size-fits-all” diets, calorie restriction, or plans that ignore hormonal and metabolic health",
          "If you’ve ever been told to “just lose weight” or felt unheard — this program offers a deeply personalized, science-led, and compassionate roadmap to true hormonal balance"
        ],
        whatWeDo: [
          "Comprehensive Clinical Assessment",
          "Biochemical Report Analysis",
          "Nutrigenomic Testing (Optional, Strongly Recommended)",
          "Precision Nutrition Design",
          "Targeted Supplement Strategy",
          "Lifestyle & Behavioral Coaching",
          "Monitoring & Adjustment"
        ],
        outcomeFrame: [
          "Improved menstrual regularity (cycle length normalizes, ovulation returns)",
          "Lowered fasting insulin, improved IR (insulin resistance) , thyroid levels",
          "Reduction in androgenic symptoms: acne, hair growth, hirsutism",
          "Stabilized mood, reduced PMS/PMDD severity",
          "Sustainable weight regulation, based on metabolic rather than caloric fixes",
          "Improved energy, sleep quality, and cravings control",
          "Better long-term fertility markers, if that is a goal"
        ]
      },
      {
        title: "Quarterly Transformative Plan",
        servicePageDescription: "A complete quarterly guided-care plan for meaningful and sustainable lifestyle change.",
        bulletPoints: [
          "Three in-depth consultations",
          "Fully personalized strategies",
          "Five follow-up sessions",
          "Total 8 guided touchpoints"
        ],
        popUpPageDescription: [
          "Your hormones are not “in your head” — they are deeply rooted in your body’s biochemistry, metabolism, and daily rhythms.",
          "When they are out of balance, your body speaks through symptoms — irregular cycles, weight changes, mood shifts, skin concerns, and more.",
          "This program is designed to decode your hormonal blueprint and restore balance across your metabolism, thyroid, and insulin response — bringing back clarity, stability, and vitality.",
          "Through personalized nutrition, lifestyle alignment, and root-cause analysis, we move beyond quick fixes to create lasting hormonal harmony."
        ],
        whoThisIsFor: [
          "Women and adolescents experiencing PCOS/PCOD, irregular or painful cycles, PMS, acne, hirsutism, or unexplained weight gain",
          "Those dealing with insulin resistance (IR), thyroid imbalances (hypothyroidism/Hashimoto’s), or stubborn weight that doesn’t respond to diets",
          "Individuals struggling with fatigue, sugar cravings, mood swings, or metabolic slowdown linked to hormonal imbalance",
          "Anyone feeling stuck with “one-size-fits-all” diets, calorie restriction, or plans that ignore hormonal and metabolic health",
          "If you’ve ever been told to “just lose weight” or felt unheard — this program offers a deeply personalized, science-led, and compassionate roadmap to true hormonal balance"
        ],
        whatWeDo: [
          "Comprehensive Clinical Assessment",
          "Metabolic Lab Audit",
          "Nutrigenomic Testing (Optional, Strongly Recommended)",
          "Precision Nutrition Design",
          "Targeted Supplement Strategy",
          "Lifestyle & Behavioral Coaching",
          "Monitoring & Adjustment"
        ],
        outcomeFrame: [
          "Improved menstrual regularity (cycle length normalizes, ovulation returns)",
          "Lowered fasting insulin, improved IR (insulin resistance) , thyroid levels",
          "Reduction in androgenic symptoms: acne, hair growth, hirsutism",
          "Stabilized mood, reduced PMS/PMDD severity",
          "Sustainable weight regulation, based on metabolic rather than caloric fixes",
          "Improved energy, sleep quality, and cravings control",
          "Better long-term fertility markers, if that is a goal"
        ]
      },
      {
        title: "Couple Wellness Program",
        servicePageDescription: "A 3-month shared nutrition journey for couples choosing to grow, heal, and thrive together.",
        bulletPoints: [
          "Three in-depth consultations each",
          "Personalized plans for both partners",
          "Five follow-up sessions each",
          "Total 16 sessions of support"
        ],
        popUpPageDescription: [
          "Your hormones are not “in your head” — they are deeply rooted in your body’s biochemistry, metabolism, and daily rhythms.",
          "When they are out of balance, your body speaks through symptoms — irregular cycles, weight changes, mood shifts, skin concerns, and more.",
          "This program is designed to decode your hormonal blueprint and restore balance across your metabolism, thyroid, and insulin response — bringing back clarity, stability, and vitality.",
          "Through personalized nutrition, lifestyle alignment, and root-cause analysis, we move beyond quick fixes to create lasting hormonal harmony."
        ],
        whoThisIsFor: [
          "Women and adolescents experiencing PCOS/PCOD, irregular or painful cycles, PMS, acne, hirsutism, or unexplained weight gain",
          "Those dealing with insulin resistance (IR), thyroid imbalances (hypothyroidism/Hashimoto’s), or stubborn weight that doesn’t respond to diets",
          "Individuals struggling with fatigue, sugar cravings, mood swings, or metabolic slowdown linked to hormonal imbalance",
          "Anyone feeling stuck with “one-size-fits-all” diets, calorie restriction, or plans that ignore hormonal and metabolic health",
          "If you’ve ever been told to “just lose weight” or felt unheard — this program offers a deeply personalized, science-led, and compassionate roadmap to true hormonal balance"
        ],
        whatWeDo: [
          "Comprehensive Clinical Assessment",
          "Metabolic Lab Audit",
          "Nutrigenomic Testing (Optional, Strongly Recommended)",
          "Precision Nutrition Design",
          "Targeted Supplement Strategy",
          "Lifestyle & Behavioral Coaching",
          "Monitoring & Adjustment"
        ],
        outcomeFrame: [
          "Improved menstrual regularity (cycle length normalizes, ovulation returns)",
          "Lowered fasting insulin, improved IR (insulin resistance) , thyroid levels",
          "Reduction in androgenic symptoms: acne, hair growth, hirsutism",
          "Stabilized mood, reduced PMS/PMDD severity",
          "Sustainable weight regulation, based on metabolic rather than caloric fixes",
          "Improved energy, sleep quality, and cravings control",
          "Better long-term fertility markers, if that is a goal"
        ]
      }
    ]
  },
  {
    id: "preconception-power",
    title: "Pre-conception Power",
    image: servicePreconception,
    shortDesc: "Boost your fertility naturally with our tailored Fertility Diet.",
    description: "Boost your fertility naturally with our tailored Fertility Diet. This program is thoughtfully designed to support hormonal balance, improve reproductive health, and prepare your body for conception.",
    subPrograms: [
      {
        title: "Single Consultation",
        servicePageDescription: "An in-depth one-on-one consultation with a customized diet plan built around your lifestyle, goals, and health needs.",
        bulletPoints: [
          "In-depth personalized health consultation",
          "Lifestyle, diet & hormonal assessment",
          "Medical history blood report review",
          "Personalized guidance for balanced wellness"
        ],
        popUpPageDescription: [
          "We prepare your body (and your partner’s) with essential nutrients and metabolic-level support to truly prime your fertility. We don't just focus on basic vitamins; we optimize the internal environment where life begins.",
          "Through comprehensive preconception lab reviews and targeted nutritional workups (including Folate/B12 status and inflammatory markers), we provide couples with a roadmap to reduce early pregnancy risk factors, improve egg and sperm health, and enhance the probability of successful implantation.",
          "What to Expect: A clear, actionable checklist including specific nutrient targets, toxin avoidance strategies, and optimal weight windows for conception."
        ],
        whoThisIsFor: [
          "Women (and couples) who are planning pregnancy or undergoing fertility treatment (IVF, IUI).",
          "Those who have faced recurrent pregnancy loss, implantation failure or poor egg/sperm quality.",
          "Anyone who wants to optimize their body before conception, rather than reacting after a positive or negative test."
        ],
        whatWeDo: [
          "Planning & Preparation",
          "Resilience Building",
          "Proactive Health",
          "The Clinical Pathway",
          "Baseline Fertility Nutrition Assessment",
          "Biochemical Report Analysis",
          "Nutrient Density & Absorption Optimization",
          "Metabolic Stabilization",
          "Targeted Supplement Strategy",
          "Preconception Roadmap & Monitoring"
        ],
        outcomeFrame: [
          "Optimized Micronutrient Status",
          "Metabolic Balance",
          "Enhanced Cell Quality",
          "Stronger Foundations",
          "Uterine Readiness"
        ]
      },
      {
        title: "Metabolic Reset",
        servicePageDescription: "A 30-day structured program designed to initiate a sustainable metabolic transformation.",
        bulletPoints: [
          "In-depth consultation",
          "Fully customized nutrition plan",
          "Two guided follow-up sessions",
          "3 touchpoints every 8-10 days"
        ],
        popUpPageDescription: [
          "We prepare your body (and your partner’s) with essential nutrients and metabolic-level support to truly prime your fertility. We don't just focus on basic vitamins; we optimize the internal environment where life begins.",
          "Through comprehensive preconception lab reviews and targeted nutritional workups (including Folate/B12 status and inflammatory markers), we provide couples with a roadmap to reduce early pregnancy risk factors, improve egg and sperm health, and enhance the probability of successful implantation.",
          "What to Expect: A clear, actionable checklist including specific nutrient targets, toxin avoidance strategies, and optimal weight windows for conception."
        ],
        whoThisIsFor: [
          "Women (and couples) who are planning pregnancy or undergoing fertility treatment (IVF, IUI).",
          "Those who have faced recurrent pregnancy loss, implantation failure or poor egg/sperm quality.",
          "Anyone who wants to optimize their body before conception, rather than reacting after a positive or negative test."
        ],
        whatWeDo: [
          "Planning & Preparation",
          "Resilience Building",
          "Proactive Health",
          "The Clinical Pathway",
          "Baseline Fertility Nutrition Assessment",
          "Biochemical Report Analysis",
          "Nutrient Density & Absorption Optimization",
          "Metabolic Stabilization",
          "Targeted Supplement Strategy",
          "Preconception Roadmap & Monitoring"
        ],
        outcomeFrame: [
          "Optimized Micronutrient Status",
          "Metabolic Balance",
          "Enhanced Cell Quality",
          "Stronger Foundations",
          "Uterine Readiness"
        ]
      },
      {
        title: "Quarterly Transformative Plan",
        servicePageDescription: "A complete quarterly guided-care plan for meaningful and sustainable lifestyle change.",
        bulletPoints: [
          "Three in-depth consultations",
          "Fully personalized strategies",
          "Five follow-up sessions",
          "Total 8 guided touchpoints"
        ],
        popUpPageDescription: [
          "We prepare your body (and your partner’s) with essential nutrients and metabolic-level support to truly prime your fertility. We don't just focus on basic vitamins; we optimize the internal environment where life begins.",
          "Through comprehensive preconception lab reviews and targeted nutritional workups (including Folate/B12 status and inflammatory markers), we provide couples with a roadmap to reduce early pregnancy risk factors, improve egg and sperm health, and enhance the probability of successful implantation.",
          "What to Expect: A clear, actionable checklist including specific nutrient targets, toxin avoidance strategies, and optimal weight windows for conception."
        ],
        whoThisIsFor: [
          "Women (and couples) who are planning pregnancy or undergoing fertility treatment (IVF, IUI).",
          "Those who have faced recurrent pregnancy loss, implantation failure or poor egg/sperm quality.",
          "Anyone who wants to optimize their body before conception, rather than reacting after a positive or negative test."
        ],
        whatWeDo: [
          "Planning & Preparation",
          "Resilience Building",
          "Proactive Health",
          "The Clinical Pathway",
          "Baseline Fertility Nutrition Assessment",
          "Biochemical Report Analysis",
          "Nutrient Density & Absorption Optimization",
          "Metabolic Stabilization",
          "Targeted Supplement Strategy",
          "Preconception Roadmap & Monitoring"
        ],
        outcomeFrame: [
          "Optimized Micronutrient Status",
          "Metabolic Balance",
          "Enhanced Cell Quality",
          "Stronger Foundations",
          "Uterine Readiness"
        ]
      },
      {
        title: "Couple Wellness Program",
        servicePageDescription: "A 3-month shared nutrition journey for couples choosing to grow, heal, and thrive together.",
        bulletPoints: [
          "Three in-depth consultations each",
          "Personalized plans for both partners",
          "Five follow-up sessions each",
          "Total 16 sessions of support"
        ],
        popUpPageDescription: [
          "We prepare your body (and your partner’s) with essential nutrients and metabolic-level support to truly prime your fertility. We don't just focus on basic vitamins; we optimize the internal environment where life begins.",
          "Through comprehensive preconception lab reviews and targeted nutritional workups (including Folate/B12 status and inflammatory markers), we provide couples with a roadmap to reduce early pregnancy risk factors, improve egg and sperm health, and enhance the probability of successful implantation.",
          "What to Expect: A clear, actionable checklist including specific nutrient targets, toxin avoidance strategies, and optimal weight windows for conception."
        ],
        whoThisIsFor: [
          "Women (and couples) who are planning pregnancy or undergoing fertility treatment (IVF, IUI).",
          "Those who have faced recurrent pregnancy loss, implantation failure or poor egg/sperm quality.",
          "Anyone who wants to optimize their body before conception, rather than reacting after a positive or negative test."
        ],
        whatWeDo: [
          "Planning & Preparation",
          "Resilience Building",
          "Proactive Health",
          "The Clinical Pathway",
          "Baseline Fertility Nutrition Assessment",
          "Biochemical Report Analysis",
          "Nutrient Density & Absorption Optimization",
          "Metabolic Stabilization",
          "Targeted Supplement Strategy",
          "Preconception Roadmap & Monitoring"
        ],
        outcomeFrame: [
          "Optimized Micronutrient Status",
          "Metabolic Balance",
          "Enhanced Cell Quality",
          "Stronger Foundations",
          "Uterine Readiness"
        ]
      }
    ]
  },
  {
    id: "nourish-and-flourish",
    title: "Nourish and Flourish",
    image: servicePregnancy,
    shortDesc: "Pregnancy is a metabolic symphony — and your body is the orchestra.",
    description: "Pregnancy is a metabolic symphony, and your body is the orchestra. We conduct it with science, biochemistry and nutrition in perfect harmony for a healthy pregnancy.",
    subPrograms: [
      {
        title: "Single Consultation",
        servicePageDescription: "An in-depth one-on-one consultation with a customized diet plan built around your pregnancy nutrition program focused on mother and baby nourishment.",
        bulletPoints: [
          "In-depth personalized health consultation",
          "Trimester-specific nutrition",
          "Symptom-based guidance",
          "Baby plus mother nourishment focus"
        ],
        popUpPageDescription: [
          "Pregnancy is a metabolic symphony — and your body is the orchestra.",
          "We conduct it with science: Biochemistry, and Nutrition in perfect harmony."
        ],
        whoThisIsFor: [
          "Pregnant women seeking more than “eat for two” advice.",
          "Those worried about gestational diabetes, nutrient deficiencies, fetal growth, or postpartum recovery.",
          "Anyone who wants a deeply personalized, scientifically robust, evidence-based prenatal nutrition plan."
        ],
        whatWeDo: [
          "Initial Antenatal Metabolic Assessment",
          "Trimester-Specific Dietary Programming",
          "Supplementation (Precision + Evidence-Based)",
          "Lifestyle & Behavioural Support"

        ],
        outcomeFrame: [
          "Optimized maternal micronutrient levels (iron, B12, folate, vitamin D)",
          "Better blood sugar regulation (lower GDM risk)",
          "Customized DHA levels for fetal brain development",
          "Healthy weight gain according to the gestational age",
          "Better mood, energy, and pregnancy comfort",
          "A seamless foundation for postpartum recovery and lactation"
        ]
      },
      {
        title: "Nourish & Flourish – 1st Trimester",
        servicePageDescription: "A trimester-wise pregnancy nutrition program focused on mother and baby nourishment.",
        bulletPoints: [
          "Nutrition plan to support early pregnancy development",
          "Guidance to manage nausea, fatigue and appetite changes",
          "Focus on essential nutrients for fetal growth",
          "Support for building strong pregnancy foundation"
        ],
        popUpPageDescription: [
          "Pregnancy is a metabolic symphony — and your body is the orchestra.",
          "We conduct it with science: Biochemistry, and Nutrition in perfect harmony."
        ],
        whoThisIsFor: [
          "Pregnant women seeking more than “eat for two” advice.",
          "Those worried about gestational diabetes, nutrient deficiencies, fetal growth, or postpartum recovery.",
          "Anyone who wants a deeply personalized, scientifically robust, evidence-based prenatal nutrition plan."
        ],
        whatWeDo: [
          "Initial Antenatal Metabolic Assessment",
          "Trimester-Specific Dietary Programming",
          "Supplementation (Precision + Evidence-Based)",
          "Lifestyle & Behavioural Support",
          "Monitoring & Adjustment"
        ],
        outcomeFrame: [
          "Optimized maternal micronutrient levels (iron, B12, folate, vitamin D)",
          "Better blood sugar regulation (lower GDM risk)",
          "Customized DHA levels for fetal brain development",
          "Healthy weight gain according to the gestational age",
          "Better mood, energy, and pregnancy comfort",
          "A seamless foundation for postpartum recovery and lactation"
        ]
      },
      {
        title: "Nourish & Flourish – 2nd Trimester",
        servicePageDescription: "A trimester-wise pregnancy nutrition program focused on mother and baby nourishment.",
        bulletPoints: [
          "Nutrition plan to support rapid fetal growth phase",
          "Guidance to improve energy and nutrient intake",
          "Focus on calcium, protein and iron requirements",
          "Support for maternal strength and overall wellbeing"
        ],
        popUpPageDescription: [
          "Pregnancy is a metabolic symphony — and your body is the orchestra.",
          "We conduct it with science: Biochemistry, and Nutrition in perfect harmony."
        ],
        whoThisIsFor: [
          "Pregnant women seeking more than “eat for two” advice.",
          "Those worried about gestational diabetes, nutrient deficiencies, fetal growth, or postpartum recovery.",
          "Anyone who wants a deeply personalized, scientifically robust, evidence-based prenatal nutrition plan."
        ],
        whatWeDo: [
          "Initial Antenatal Metabolic Assessment",
          "Trimester-Specific Dietary Programming",
          "Supplementation (Precision + Evidence-Based)",
          "Lifestyle & Behavioural Support",
          "Monitoring & Adjustment"
        ],
        outcomeFrame: [
          "Optimized maternal micronutrient levels (iron, B12, folate, vitamin D)",
          "Better blood sugar regulation (lower GDM risk)",
          "Customized DHA levels for fetal brain development",
          "Healthy weight gain according to the gestational age",
          "Better mood, energy, and pregnancy comfort",
          "A seamless foundation for postpartum recovery and lactation"
        ]
      },
      {
        title: "Nourish & Flourish – 3rd Trimester",
        servicePageDescription: "A trimester-wise pregnancy nutrition program focused on mother and baby nourishment.",
        bulletPoints: [
          "Nutrition plan to support final fetal development stage",
          "Guidance to manage discomfort, digestion and energy levels",
          "Focus on nutrients supporting baby weight and strength",
          "Preparation support for delivery and postpartum recovery"
        ],
        popUpPageDescription: [
          "Pregnancy is a metabolic symphony — and your body is the orchestra.",
          "We conduct it with science: Biochemistry, and Nutrition in perfect harmony."
        ],
        whoThisIsFor: [
          "Pregnant women seeking more than “eat for two” advice.",
          "Those worried about gestational diabetes, nutrient deficiencies, fetal growth, or postpartum recovery.",
          "Anyone who wants a deeply personalized, scientifically robust, evidence-based prenatal nutrition plan."
        ],
        whatWeDo: [
          "Initial Antenatal Metabolic Assessment",
          "Trimester-Specific Dietary Programming",
          "Supplementation (Precision + Evidence-Based)",
          "Lifestyle & Behavioural Support",
          "Monitoring & Adjustment"
        ],
        outcomeFrame: [
          "Optimized maternal micronutrient levels (iron, B12, folate, vitamin D)",
          "Better blood sugar regulation (lower GDM risk)",
          "Customized DHA levels for fetal brain development",
          "Healthy weight gain according to the gestational age",
          "Better mood, energy, and pregnancy comfort",
          "A seamless foundation for postpartum recovery and lactation"
        ]
      },
      {
        title: "Nourish & Flourish – Holistic Pregnancy Care",
        servicePageDescription: "An in-depth one-on-one consultation with a customized diet plan built around your pregnancy nutrition program focused on mother and baby nourishment.",
        bulletPoints: [
          "Five consultations aligned with key scans and milestones",
          "Personalized nutrition updated across each trimester stage",
          "Guidance based on blood reports and medical changes",
          "Continuous support for mother and baby wellbeing"
        ],
        popUpPageDescription: [
          "Pregnancy is a metabolic symphony — and your body is the orchestra.",
          "We conduct it with science: Biochemistry, and Nutrition in perfect harmony."
        ],
        whoThisIsFor: [
          "Pregnant women seeking more than “eat for two” advice.",
          "Those worried about gestational diabetes, nutrient deficiencies, fetal growth, or postpartum recovery.",
          "Anyone who wants a deeply personalized, scientifically robust, evidence-based prenatal nutrition plan."
        ],
        whatWeDo: [
          "Initial Antenatal Metabolic Assessment",
          "Trimester-Specific Dietary Programming",
          "Supplementation (Precision + Evidence-Based)",
          "Lifestyle & Behavioural Support",
          "Monitoring & Adjustment"
        ],
        outcomeFrame: [
          "Optimized maternal micronutrient levels (iron, B12, folate, vitamin D)",
          "Better blood sugar regulation (lower GDM risk)",
          "Customized DHA levels for fetal brain development",
          "Healthy weight gain according to the gestational age",
          "Better mood, energy, and pregnancy comfort",
          "A seamless foundation for postpartum recovery and lactation"
        ]
      }
    ]
  },
  {
    id: "lactation-harmony",
    title: "Lactation Harmony",
    image: serviceLactation,
    shortDesc: "Breast milk is more than food — it's a metabolic fingerprint.",
    description: "Breast milk is more than food — it's a metabolic fingerprint, reflecting your hormones, health and DNA. We help you feed the future while fueling yourself with targeted nutrition strategies.",
    subPrograms: [
      {
        title: "Single Consultation",
        servicePageDescription: "Breast milk is more than food — it's a metabolic fingerprint, reflecting your hormones, health and DNA. We help you feed the future while fueling yourself with targeted nutrition strategies.",
        bulletPoints: [
          "In-depth consultation to support recovery and lactation",
          "Nutrition guidance tailored for postpartum healing needs",
          "Assessment of feeding patterns and maternal health",
          "Personalized strategies to enhance milk production naturally"
        ],
        popUpPageDescription: [
          "Breast milk is more than food — it’s a metabolic fingerprint, reflecting your hormones, health and DNA.",
          "We help you feed the future while fueling yourself.",
          "Not just calories — we treat milk as a metabolite: substrate (maternal macronutrients), signal (prolactin/cortisol balance), and synthesis capacity (thyroid, iron). If genetic profiling shows variants associated with omega-3 conversion or fatty acid distribution, we prioritize preformed DHA and targeted lipid strategies to enrich milk composition. Hydration + protein distribution + timed snacks become your frontline tools."
        ],
        whoThisIsFor: [
          "New mothers who are breastfeeding and worried about supply, nutrition, or postpartum recovery.",
          "Those facing low milk production, fatigue, mood swings, or postpartum weight loss challenges.",
          "Mothers who want a scientifically sound, personalized diet rather than generic “eat more” charts."
        ],
        whatWeDo: [
          "Feeding & Clinical Assessment",
          "Metabolic & Biochemical Labs",
          "Nutrition Design (Milk Support + Maternal Health)",
          "Precision Supplement Plan",
          "Behavior + Recovery Coaching"
        ],
        outcomeFrame: [
          "Increased and stabilized milk supply",
          "Improved nutrient status (e.g., DHA, B12, iron, choline)",
          "Better maternal energy, mood, and recovery",
          "Sustainable postpartum weight regulation (preserving milk supply)",
          "Enhanced mother-infant bonding (through efficient feeding + balanced mood)"
        ]
      },
      {
        title: "30 days - Lactation program",
        servicePageDescription: "A 30-day lactation care program designed to support recovery and enhance milk production.",
        bulletPoints: [
          "In-depth consultation",
          "Personalized lactation nutrition plan",
          "Two guided follow-up sessions",
          "3 touchpoints every 8-10 days"
        ],
        popUpPageDescription: [
          "Breast milk is more than food — it’s a metabolic fingerprint, reflecting your hormones, health and DNA.",
          "We help you feed the future while fueling yourself.",
          "Not just calories — we treat milk as a metabolite: substrate (maternal macronutrients), signal (prolactin/cortisol balance), and synthesis capacity (thyroid, iron). If genetic profiling shows variants associated with omega-3 conversion or fatty acid distribution, we prioritize preformed DHA and targeted lipid strategies to enrich milk composition. Hydration + protein distribution + timed snacks become your frontline tools."
        ],
        whoThisIsFor: [
          "New mothers who are breastfeeding and worried about supply, nutrition, or postpartum recovery.",
          "Those facing low milk production, fatigue, mood swings, or postpartum weight loss challenges.",
          "Mothers who want a scientifically sound, personalized diet rather than generic “eat more” charts."
        ],
        whatWeDo: [
          "Feeding & Clinical Assessment",
          "Metabolic & Biochemical Labs",
          "Nutrition Design (Milk Support + Maternal Health)",
          "Precision Supplement Plan",
          "Behavior + Recovery Coaching"
        ],
        outcomeFrame: [
          "Increased and stabilized milk supply",
          "Improved nutrient status (e.g., DHA, B12, iron, choline)",
          "Better maternal energy, mood, and recovery",
          "Sustainable postpartum weight regulation (preserving milk supply)",
          "Enhanced mother-infant bonding (through efficient feeding + balanced mood)"
        ]
      }
    ]
  },
  {
    id: "little-bites-big-growth",
    title: "Little Bites, Big Growth",
    image: serviceChild,
    shortDesc: "Early-life nutrition program combining complementary feeding science.",
    description: "You're not just feeding your child — you're writing their metabolic and epigenetic story. Our early-life nutrition program combines complementary feeding science, growth biology and genetic insight.",
    subPrograms: [
      {
        title: "Single Consultation",
        servicePageDescription: "You're not just feeding your child — you're writing their metabolic and epigenetic story. Our early-life nutrition program combines complementary feeding science, growth biology and genetic insight.",
        bulletPoints: [
          "In-depth consultation to understand child’s eating patterns",
          "Assessment of growth, habits and nutritional gaps",
          "Guidance for picky eating and meal structure",
          "Practical strategies to build healthy eating habits"
        ],
        popUpPageDescription: [
          "You’re not just feeding your child — you’re writing their metabolic and epigenetic story.",
          "Our early-life nutrition program combines complementary feeding science, growth biology and genetic insight.",
          "Feeding at 6 months is a developmental intervention with lifelong consequences. We combine iron repletion strategy, complementary feeding constructs, and early-epigenetic awareness (how maternal and early infant diet influence methylation). For picky eaters we apply sensory exposure protocols informed by metabolic phenotype (carbohydrate sensitivity vs. protein preference) and use stepwise desensitization with quantifiable growth endpoints."
        ],
        whoThisIsFor: [
          "Parents wanting structured nutrition for children",
          "Kids with fussy eating, poor appetite, low weight",
          "Children needing immunity and growth support"
        ],
        whatWeDo: [
          "Growth & Feeding Baseline Assessment",
          "Growth Monitoring & Behavioral Coaching"
        ],
        outcomeFrame: [
          "Balanced growth aligned with genetic and metabolic potential",
          "Better iron, B12, DHA, and micronutrient status in your child",
          "Reduced picky eating through structured exposure and variety",
          "Stronger immunity, better developmental potential, and eating confidence",
          "Family meals that honor both your child's needs and your nutritional philosophy"
        ]
      },
      {
        title: "30 days program",
        servicePageDescription: "A 30-day program designed as you're not just feeding your child — you're writing their metabolic and epigenetic story. Our early-life nutrition program combines complementary feeding science, growth biology and genetic insight.",
        bulletPoints: [
          "In-depth consultation",
          "Personalized nutrition plan",
          "Two guided follow-up sessions",
          "3 touchpoints every 8-10 days"
        ],
        popUpPageDescription: [
          "You’re not just feeding your child — you’re writing their metabolic and epigenetic story.",
          "Our early-life nutrition program combines complementary feeding science, growth biology and genetic insight.",
          "Feeding at 6 months is a developmental intervention with lifelong consequences. We combine iron repletion strategy, complementary feeding constructs, and early-epigenetic awareness (how maternal and early infant diet influence methylation). For picky eaters we apply sensory exposure protocols informed by metabolic phenotype (carbohydrate sensitivity vs. protein preference) and use stepwise desensitization with quantifiable growth endpoints."
        ],
        whoThisIsFor: [
          "Parents wanting structured nutrition for children",
          "Kids with fussy eating, poor appetite, low weight",
          "Children needing immunity and growth support"
        ],
        whatWeDo: [
          "Growth & Feeding Baseline Assessment",
          "Metabolic & Biochemical Screening (If Indicated)",
          "Micronutrient & Supplement Advice (If Needed)",
          "Growth Monitoring & Behavioral Coaching"
        ],
        outcomeFrame: [
          "Balanced growth aligned with genetic and metabolic potential",
          "Better iron, B12, DHA, and micronutrient status in your child",
          "Reduced picky eating through structured exposure and variety",
          "Stronger immunity, better developmental potential, and eating confidence",
          "Family meals that honor both your child's needs and your nutritional philosophy"
        ]
      }
    ]
  },
  {
    id: "mommy-makeover",
    title: "Mommy Makeover",
    image: serviceMommy,
    shortDesc: "Nourishing your body, calming your mind, and empowering yourself postpartum.",
    description: "Our Mommy Makeover program goes beyond just getting back in shape. It's about nourishing your body, calming your mind, and embracing a positive, empowered relationship with yourself.",
    subPrograms: [
      {
        title: "Single Consultation",
        servicePageDescription: "Our Mommy Makeover program goes beyond just getting back in shape. It's about nourishing your body, calming your mind, and embracing a positive, empowered relationship with yourself.",
        bulletPoints: [
          "Monthly body reset",
          "Postpartum weight loss",
          "Guided fat loss",
          "Metabolic recovery support"
        ],
        popUpPageDescription: [
          "Postpartum transformation is not cosmetic — it's metabolic.",
          "We re-engineer your body through hormone-informed nutrition + your genetic blueprint.",
          "A staged metabolic reset that protects lactation: protein prioritization for muscle repletion, cyclical carb modulation to restore insulin sensitivity, and repletion of nutrients essential for neurotransmitter synthesis (B-vitamins, magnesium) to support mood and appetite regulation. Genetic insights guide safe calorie targets and macronutrient splits so you’re not “dieting blind.”"
        ],
        whoThisIsFor: [
          "New mothers want to lose weight, regain strength, and heal postpartum.",
          "Mothers concerned about hormonal shifts, low energy, mood, milk supply.",
          "Anyone who doesn’t want a crash “diet” but a medically informed, sustainable nutritional reset."
        ],
        whatWeDo: [
          "Postpartum Clinical Assessment",
          "Biochemical Analysis",
          "Nutrition Reset",
          "Supplement Strategy",
          "Lifestyle & Habit Coaching",
          "Monitoring & Adaptation"
        ],
        outcomeFrame: [
          "Gradual and sustainable postpartum weight reduction",
          "Recovered energy, better sleep, more balanced mood",
          "Improved lab markers (iron, B-vitamin, insulin, thyroid)",
          "Stronger body composition (muscle mass, reduced fat, functional strength)",
          "Enhanced lactation (if breastfeeding) and overall maternal well-being"
        ]
      },
      {
        title: "Quarterly Transformation Plan",
        servicePageDescription: "A complete quarterly guided-care plan for meaningful and sustainable lifestyle change. Our Mommy Makeover program goes beyond just getting back in shape. It's about nourishing your body, calming your mind, and embracing a positive, empowered relationship with yourself.",
        bulletPoints: [
          "Three in-depth consultations",
          "Fully personalized strategies",
          "Five follow-up sessions",
          "Total 8 guided touchpoints"
        ],
        popUpPageDescription: [
          "Postpartum transformation is not cosmetic — it's metabolic.",
          "We re-engineer your body through hormone-informed nutrition + your genetic blueprint.",
          "A staged metabolic reset that protects lactation: protein prioritization for muscle repletion, cyclical carb modulation to restore insulin sensitivity, and repletion of nutrients essential for neurotransmitter synthesis (B-vitamins, magnesium) to support mood and appetite regulation. Genetic insights guide safe calorie targets and macronutrient splits so you’re not “dieting blind.”"
        ],
        whoThisIsFor: [
          "New mothers want to lose weight, regain strength, and heal postpartum.",
          "Mothers concerned about hormonal shifts, low energy, mood, milk supply.",
          "Anyone who doesn’t want a crash “diet” but a medically informed, sustainable nutritional reset."
        ],
        whatWeDo: [
          "Postpartum Clinical Assessment",
          "Biochemical Analysis",
          "Nutrition Reset",
          "Supplement Strategy",
          "Lifestyle & Habit Coaching",
          "Monitoring & Adaptation"
        ],
        outcomeFrame: [
          "Gradual and sustainable postpartum weight reduction",
          "Recovered energy, better sleep, more balanced mood",
          "Improved lab markers (iron, B-vitamin, insulin, thyroid)",
          "Stronger body composition (muscle mass, reduced fat, functional strength)",
          "Enhanced lactation (if breastfeeding) and overall maternal well-being"
        ]
      }
    ]
  }
];
