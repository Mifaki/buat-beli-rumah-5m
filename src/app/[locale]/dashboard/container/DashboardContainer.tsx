import { useTranslations } from 'next-intl';
import { Button } from '@/shared/components/ui/button';

const DashboardContainer = () => {
  const t = useTranslations('HomePage');

  return (
    <>
      <h1 className="text-center text-2xl font-semibold text-destructive">RUMAH MAHAL</h1>
      <p>{t('title')}</p>
      <Button>Test Button</Button>
    </>
  );
};

export default DashboardContainer;
