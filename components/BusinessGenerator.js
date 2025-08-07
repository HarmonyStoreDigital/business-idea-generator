import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Sparkles, Rocket, Target, DollarSign, Cpu, Building, TrendingUp, Users, Leaf, Shield, Globe, Lightbulb } from 'lucide-react';

const BusinessGenerator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState({});
  const [generatedIdea, setGeneratedIdea] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const steps = [
    {
      id: 'businessModel',
      title: 'Modelul de Business',
      subtitle: 'Cum vrei să interacționezi cu clienții?',
      icon: <Target className="w-6 h-6" />,
      options: [
        { value: 'b2b', label: 'B2B - Business to Business', desc: 'Vinzi către alte companii' },
        { value: 'b2c', label: 'B2C - Business to Consumer', desc: 'Vinzi direct către consumatori' },
        { value: 'b2b2c', label: 'B2B2C - Hybrid', desc: 'Combinezi ambele modele' },
        { value: 'marketplace', label: 'Marketplace', desc: 'Conectezi vânzători cu cumpărători' },
        { value: 'platform', label: 'Platform', desc: 'Creezi un ecosistem pentru utilizatori' }
      ]
    },
    {
      id: 'revenueModel',
      title: 'Modelul de Venit',
      subtitle: 'Cum plănuiești să câștigi bani?',
      icon: <DollarSign className="w-6 h-6" />,
      options: [
        { value: 'subscription', label: 'Abonament', desc: 'Plată recurentă lunară/anuală' },
        { value: 'onetime', label: 'Plată unică', desc: 'Cumpărare o singură dată' },
        { value: 'freemium', label: 'Freemium', desc: 'Gratuit cu opțiuni premium' },
        { value: 'commission', label: 'Comision', desc: 'Procent din tranzacții' },
        { value: 'advertising', label: 'Publicitate', desc: 'Venit din reclame' },
        { value: 'licensing', label: 'Licențiere', desc: 'Licențiezi tehnologia/brandul' }
      ]
    },
    {
      id: 'technology',
      title: 'Tehnologia Principală',
      subtitle: 'Ce tehnologie va fi motorul businessului?',
      icon: <Cpu className="w-6 h-6" />,
      options: [
        { value: 'ai', label: 'Inteligență Artificială', desc: 'AI/ML pentru automatizare' },
        { value: 'blockchain', label: 'Blockchain', desc: 'Tehnologie distribuită' },
        { value: 'web', label: 'Web/Mobile App', desc: 'Aplicații web și mobile' },
        { value: 'iot', label: 'Internet of Things', desc: 'Dispozitive conectate' },
        { value: 'saas', label: 'Software as a Service', desc: 'Software în cloud' },
        { value: 'ecommerce', label: 'E-commerce', desc: 'Comerț electronic' },
        { value: 'traditional', label: 'Tradițional', desc: 'Fără tehnologie avansată' }
      ]
    },
    {
      id: 'industry',
      title: 'Industria',
      subtitle: 'În ce domeniu vrei să activezi?',
      icon: <Building className="w-6 h-6" />,
      options: [
        { value: 'tech', label: 'Tehnologie', desc: 'Software, hardware, IT' },
        { value: 'healthcare', label: 'Sănătate', desc: 'Medical, wellness, fitness' },
        { value: 'finance', label: 'Fintech', desc: 'Servicii financiare digitale' },
        { value: 'education', label: 'Educație', desc: 'Învățământ, training, cursuri' },
        { value: 'retail', label: 'Retail', desc: 'Vânzare cu amănuntul' },
        { value: 'food', label: 'Food & Beverage', desc: 'Mâncare și băuturi' },
        { value: 'real-estate', label: 'Real Estate', desc: 'Imobiliare' },
        { value: 'entertainment', label: 'Divertisment', desc: 'Media, gaming, content' }
      ]
    },
    {
      id: 'investment',
      title: 'Investiția Inițială',
      subtitle: 'Cât capital ai disponibil?',
      icon: <TrendingUp className="w-6 h-6" />,
      options: [
        { value: 'low', label: 'Mică (sub €1,000)', desc: 'Start cu resurse minime' },
        { value: 'medium', label: 'Medie (€1,000 - €10,000)', desc: 'Investiție moderată' },
        { value: 'high', label: 'Mare (peste €10,000)', desc: 'Capital substanțial' },
        { value: 'none', label: 'Fără capital', desc: 'Doar cu timpul și expertiza' }
      ]
    },
    {
      id: 'experience',
      title: 'Nivelul de Experiență',
      subtitle: 'Cât de experimentat ești în business?',
      icon: <Users className="w-6 h-6" />,
      options: [
        { value: 'beginner', label: 'Începător', desc: 'Primul meu business' },
        { value: 'intermediate', label: 'Intermediar', desc: 'Am ceva experiență' },
        { value: 'advanced', label: 'Avansat', desc: 'Expert în antreprenoriat' }
      ]
    },
    {
      id: 'language',
      title: 'Limba pentru Rezultat',
      subtitle: 'În ce limbă vrei ideea de business?',
      icon: <Globe className="w-6 h-6" />,
      options: [
        { value: 'ro', label: 'Română', desc: 'Ideea în limba română' },
        { value: 'en', label: 'English', desc: 'Idea in English' },
        { value: 'fr', label: 'Français', desc: 'Idée en français' },
        { value: 'de', label: 'Deutsch', desc: 'Idee auf Deutsch' },
        { value: 'es', label: 'Español', desc: 'Idea en español' }
      ]
    }
  ];

  const handleSelection = (value) => {
    const currentStepId = steps[currentStep].id;
    setSelections({ ...selections, [currentStepId]: value });
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateBusinessIdea = async () => {
    setIsGenerating(true);
    
    const language = selections.language === 'ro' ? 'română' : 
                    selections.language === 'en' ? 'English' :
                    selections.language === 'fr' ? 'français' :
                    selections.language === 'de' ? 'Deutsch' : 'español';

    const prompt = `Generează o idee detaliată de business bazată pe următoarele criterii:

Modelul de business: ${selections.businessModel}
Modelul de venit: ${selections.revenueModel}
Tehnologia: ${selections.technology}
Industria: ${selections.industry}
Investiția: ${selections.investment}
Experiența: ${selections.experience}

Te rog să răspunzi DOAR în limba ${language} cu următoarea structură:

**NUMELE BUSINESSULUI:** [nume catchy]

**DESCRIEREA IDEII:** [2-3 paragrafe despre ce face businessul]

**MODELUL DE VENIT:** [cum se câștigă bani concret]

**PAȘII PENTRU START:** [3-5 pași concreți pentru început]

**INVESTIȚIA NECESARĂ:** [detalii despre costuri]

**POTENȚIALUL DE PROFIT:** [estimări realiste]

Răspunde DOAR cu această structură, fără text suplimentar.`;

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [
            { role: "user", content: prompt }
          ]
        })
      });

      const data = await response.json();
      const idea = data.content[0].text;
      setGeneratedIdea(idea);
    } catch (error) {
      console.error("Eroare la generarea ideii:", error);
      setGeneratedIdea("Scuzele noastre, a apărut o eroare. Te rugăm să încerci din nou.");
    } finally {
      setIsGenerating(false);
    }
  };

  const resetGenerator = () => {
    setCurrentStep(0);
    setSelections({});
    setGeneratedIdea('');
  };

  const currentStepData = steps[currentStep];
  const isStepComplete = selections[currentStepData.id];
  const allStepsComplete = steps.every(step => selections[step.id]);

  if (generatedIdea) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white font-semibold mb-4">
              <Lightbulb className="w-5 h-5" />
              Ideea Ta de Business
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Businessul Perfect Pentru Tine
            </h1>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
            <div className="prose prose-invert max-w-none">
              <div className="whitespace-pre-line text-gray-100 text-lg leading-relaxed">
                {generatedIdea}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={resetGenerator}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Sparkles className="w-5 h-5" />
              Generează Altă Idee
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white font-semibold mb-6">
            <Rocket className="w-5 h-5" />
            Business Generator AI
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Descoperă-ți Businessul Perfect
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Răspunde la câteva întrebări simple și vei primi o idee personalizată de business
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-400">Progres</span>
            <span className="text-sm text-orange-400 font-semibold">
              {currentStep + 1} / {steps.length}
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Current Step */}
        <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 shadow-2xl mb-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-4">
              {currentStepData.icon}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {currentStepData.title}
            </h2>
            <p className="text-gray-400 text-lg">
              {currentStepData.subtitle}
            </p>
          </div>

          <div className="grid gap-4 max-w-2xl mx-auto">
            {currentStepData.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelection(option.value)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 text-left ${
                  selections[currentStepData.id] === option.value
                    ? 'border-orange-500 bg-orange-500/10 shadow-lg shadow-orange-500/20'
                    : 'border-gray-600 bg-gray-700/30 hover:border-orange-400 hover:bg-gray-700/50'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {option.label}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {option.desc}
                    </p>
                  </div>
                  {selections[currentStepData.id] === option.value && (
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              currentStep === 0
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gray-700 hover:bg-gray-600 text-white transform hover:scale-105'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            Înapoi
          </button>

          {currentStep === steps.length - 1 ? (
            <button
              onClick={generateBusinessIdea}
              disabled={!allStepsComplete || isGenerating}
              className={`inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                !allStepsComplete || isGenerating
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg'
              }`}
            >
              {isGenerating ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Generez...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generează Ideea
                </>
              )}
            </button>
          ) : (
            <button
              onClick={nextStep}
              disabled={!isStepComplete}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                !isStepComplete
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg'
              }`}
            >
              Următorul
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessGenerator;