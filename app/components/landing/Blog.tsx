import { Clock, ArrowRight, Tag } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";

type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readMin: number;
  gradient: string;
  featured?: boolean;
};

const articles: Article[] = [
  {
    slug: "terapia-online-funciona",
    title: "Terapia online funciona? Mitos e verdades sobre o atendimento remoto",
    excerpt: "A eficácia da terapia online é comprovada por pesquisas e regulamentada pelo CFP. Entenda como funciona o vínculo terapêutico à distância e por que ela pode ser tão eficaz quanto o presencial.",
    category: "Terapia Online",
    readMin: 6,
    gradient: "from-primary/20 to-primary/5",
    featured: true,
  },
  {
    slug: "ansiedade-sinais-ajuda",
    title: "Ansiedade: como identificar os sinais e quando buscar ajuda profissional",
    excerpt: "Coração acelerado, pensamentos intrusivos, dificuldade de concentração — conheça os sinais de que a ansiedade ultrapassou o limite saudável.",
    category: "Saúde Mental",
    readMin: 5,
    gradient: "from-accent/20 to-accent/5",
  },
  {
    slug: "burnout-digital-criadores",
    title: "Burnout digital: sinais de alerta para quem vive da internet",
    excerpt: "A pressão por produtividade constante nas redes sociais cobra um preço emocional alto. Saiba identificar o esgotamento digital antes que ele se agrave.",
    category: "Burnout",
    readMin: 7,
    gradient: "from-rose-400/15 to-rose-400/5",
  },
  {
    slug: "primeira-sessao-terapia",
    title: "O que esperar da primeira sessão de terapia",
    excerpt: "Não existe resposta errada na primeira sessão. Entenda como funciona, o que levar e como aproveitar esse primeiro passo no seu processo terapêutico.",
    category: "Terapia Online",
    readMin: 4,
    gradient: "from-primary/15 to-primary/5",
  },
  {
    slug: "autoconhecimento-comecar",
    title: "Autoconhecimento: por onde começar a jornada de se conhecer melhor",
    excerpt: "Reconhecer seus padrões emocionais e comportamentais é o primeiro passo para uma vida mais alinhada com quem você realmente é.",
    category: "Autoconhecimento",
    readMin: 5,
    gradient: "from-emerald-400/15 to-emerald-400/5",
  },
  {
    slug: "depressao-tristeza-diferenca",
    title: "Depressão x tristeza: entendendo a diferença",
    excerpt: "Nem toda tristeza é depressão, mas saber identificar quando a tristeza se torna um quadro clínico faz toda a diferença na busca por ajuda.",
    category: "Saúde Mental",
    readMin: 6,
    gradient: "from-sky-400/15 to-sky-400/5",
  },
  {
    slug: "terapia-act-aceitacao",
    title: "Terapia ACT: como a aceitação e compromisso podem mudar sua vida",
    excerpt: "A Terapia de Aceitação e Compromisso não busca eliminar o sofrimento, mas ensinar a agir com direção mesmo quando as emoções são difíceis.",
    category: "Abordagens",
    readMin: 8,
    gradient: "from-violet-400/15 to-violet-400/5",
  },
  {
    slug: "luto-mundo-digital",
    title: "Como lidar com o luto — inclusive no mundo digital",
    excerpt: "Perder alguém dói. E quando as redes sociais seguem mostrando memórias, o processo de luto pode ficar ainda mais complexo.",
    category: "Saúde Mental",
    readMin: 5,
    gradient: "from-amber-400/15 to-amber-400/5",
  },
  {
    slug: "relacionamentos-limites",
    title: "Relacionamentos saudáveis começam com limites claros",
    excerpt: "Colocar limites não é egoísmo — é autocuidado. Entenda como a terapia ajuda a construir vínculos mais autênticos e equilibrados.",
    category: "Relacionamentos",
    readMin: 6,
    gradient: "from-pink-400/15 to-pink-400/5",
  },
];

const featured = articles.find((a) => a.featured)!;
const rest = articles.filter((a) => !a.featured);

export function Blog() {
  return (
    <section className="py-20 lg:py-28 px-5 md:px-8" id="blog">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection direction="up">
          <div className="section-label">Blog</div>
          <h2 className="section-title">Artigos sobre Saúde Emocional</h2>
          <p className="section-subtitle">
            Conteúdo prático sobre ansiedade, autoconhecimento, terapia online e bem-estar emocional.
          </p>
        </AnimatedSection>

        {/* Featured article */}
        <AnimatedSection direction="up" delay={0.1} className="mt-12">
          <article className="card group grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">
            <div className={`bg-gradient-to-br ${featured.gradient} flex items-center justify-center p-12 min-h-[220px] lg:min-h-[320px]`}>
              <div className="text-center">
                <span className="inline-block text-6xl lg:text-7xl font-heading font-bold text-primary/20 select-none">✦</span>
                <p className="text-xs text-primary font-semibold mt-2 uppercase tracking-wider">Artigo em Destaque</p>
              </div>
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1 text-[0.68rem] font-semibold text-primary bg-primary/8 px-2.5 py-1 rounded-full">
                  <Tag className="w-3 h-3" /> {featured.category}
                </span>
                <span className="inline-flex items-center gap-1 text-[0.68rem] text-txt-muted">
                  <Clock className="w-3 h-3" /> {featured.readMin} min de leitura
                </span>
              </div>
              <h3 className="font-heading text-xl lg:text-2xl font-bold leading-snug mb-3 group-hover:text-primary transition-colors">
                {featured.title}
              </h3>
              <p className="text-sm text-txt-light leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <a
                href={`#blog-${featured.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all"
              >
                Ler artigo completo <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </article>
        </AnimatedSection>

        {/* Article grid */}
        <AnimatedSection
          direction="up"
          delay={0.15}
          staggerChildren={0.08}
          staggerType="premium"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8"
        >
          {rest.map((article) => (
            <AnimatedItem key={article.slug} direction="up" staggerType="premium">
              <article className="card group overflow-hidden h-full flex flex-col">
                <div className={`bg-gradient-to-br ${article.gradient} h-32 flex items-center justify-center shrink-0`}>
                  <span className="text-3xl font-heading font-bold text-primary/15 select-none">✦</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[0.62rem] font-semibold text-primary bg-primary/8 px-2 py-0.5 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-[0.62rem] text-txt-muted flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5" /> {article.readMin} min
                    </span>
                  </div>
                  <h3 className="font-heading text-sm font-semibold leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-txt-light leading-relaxed line-clamp-3 flex-1">
                    {article.excerpt}
                  </p>
                  <a
                    href={`#blog-${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary mt-4 hover:gap-2 transition-all"
                  >
                    Ler mais <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </article>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
