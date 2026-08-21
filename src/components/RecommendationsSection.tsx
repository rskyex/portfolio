import SectionHeader from '@/components/SectionHeader';
import Recommendations from '@/components/Recommendations';
import type { Locale } from '@/lib/locale';
import { getRecommendations } from '@/lib/content';
import type { Dictionary } from '@/dictionaries/types';

/** Landing-page referee comments, shown directly below the News section. */
export default function RecommendationsSection({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  if (getRecommendations().length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 pb-16 relative">
      <div className="relative">
        <SectionHeader kanji="推" english={dict.recommendationsSection.heading} />
        <div className="mt-8">
          <Recommendations locale={locale} variant="landing" />
        </div>
      </div>
    </section>
  );
}
