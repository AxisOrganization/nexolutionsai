import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <Button
        variant={language === 'en' ? 'nexo' : 'nexo-outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="px-3 py-1 text-sm"
      >
        EN
      </Button>
      <Button
        variant={language === 'ru' ? 'nexo' : 'nexo-outline'}
        size="sm"
        onClick={() => setLanguage('ru')}
        className="px-3 py-1 text-sm"
      >
        RU
      </Button>
    </div>
  );
};

export default LanguageSwitcher;