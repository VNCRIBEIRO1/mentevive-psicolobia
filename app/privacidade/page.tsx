import type { Metadata } from "next";
import Link from "next/link";
import { tenantConfig } from "@/lib/tenant.config";
import { Header } from "@/app/components/landing/Header";
import { Footer } from "@/app/components/landing/Footer";

const { professional, name, urls } = tenantConfig;

export const metadata: Metadata = {
  title: "Privacidade e Sigilo Profissional",
  description: `Política de privacidade, LGPD e sigilo profissional do consultório ${name} — ${professional.name}, ${professional.crp}.`,
  alternates: { canonical: `${urls.siteUrl}/privacidade` },
  robots: { index: true, follow: true },
};

export default function PrivacidadePage() {
  return (
    <>
      <Header />
      <main id="main" className="pt-32 pb-20 px-4 md:px-8 bg-bg">
        <article className="max-w-[760px] mx-auto">
          <div className="section-label">Documento</div>
          <h1 className="font-heading text-3xl md:text-4xl font-semibold text-txt mb-3">
            Privacidade, LGPD e Sigilo Profissional
          </h1>
          <p className="text-sm text-txt-muted mb-10">
            Última atualização: {new Date().toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}
          </p>

          <div className="prose prose-sm max-w-none text-txt-light leading-relaxed space-y-6">
            <section>
              <h2 className="font-heading text-xl font-semibold text-txt mb-2">1. Controlador dos dados</h2>
              <p>
                {professional.name} ({professional.title}, {professional.crp}), responsável pelo consultório clínico{" "}
                <strong>{name}</strong>. Para exercer direitos sobre os seus dados, use os canais oficiais
                (<Link href="/#contato" className="text-teal-dark underline">formulário de contato</Link> ou WhatsApp{" "}
                <a href={urls.whatsapp} target="_blank" rel="noopener" className="text-teal-dark underline">
                  {urls.whatsapp.replace("https://wa.me/", "+")}
                </a>
                ).
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-txt mb-2">2. Sigilo profissional</h2>
              <p>
                Tudo que é compartilhado em sessão é protegido pelo <strong>sigilo profissional</strong> previsto no Código de Ética
                Profissional do Psicólogo (Resolução CFP 010/2005). Só é possível quebrar o sigilo nas hipóteses legais — risco
                iminente de vida à própria pessoa ou a terceiros, ordem judicial ou autorização expressa do paciente.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-txt mb-2">3. Dados coletados</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Cadastro</strong> (nome, e-mail, telefone, data de nascimento) — para criar a conta e agendar.</li>
                <li><strong>Dados clínicos</strong> (histórico, evolução, anotações) — acessados somente pela psicóloga.</li>
                <li><strong>Pagamentos</strong> (processados por Stripe) — não armazeno número de cartão.</li>
                <li><strong>Uso do site</strong> (cookies essenciais, métricas agregadas) — sem perfilamento publicitário.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-txt mb-2">4. Base legal (LGPD)</h2>
              <p>
                Trato seus dados com base em: <em>execução de contrato</em> (prestação do serviço psicológico), <em>cumprimento de
                obrigação legal</em> (Código de Ética, CFP, legislação fiscal), <em>consentimento</em> (para newsletter ou envio de
                materiais) e <em>tutela da saúde</em> (Art. 11, II, “f” da LGPD).
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-txt mb-2">5. Armazenamento e segurança</h2>
              <p>
                As sessões acontecem por videochamada criptografada. Os registros clínicos ficam em sistema próprio com acesso
                controlado por login e senha, retidos pelo prazo mínimo de 5 anos após o encerramento do processo terapêutico,
                conforme Resolução CFP 001/2009.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-txt mb-2">6. Seus direitos</h2>
              <p>
                Você pode solicitar a qualquer momento: acesso aos seus dados, correção, portabilidade, anonimização,
                eliminação (quando permitido) e informação sobre compartilhamentos. Basta enviar um pedido por um dos canais
                oficiais.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-txt mb-2">7. Compartilhamento</h2>
              <p>
                Nunca compartilho conteúdo clínico sem autorização expressa. Dados operacionais podem ser processados por:
                provedor de hospedagem (Vercel), gateway de pagamento (Stripe) e plataforma de videochamada — todos com
                contratos adequados à LGPD.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-txt mb-2">8. Cookies</h2>
              <p>
                O site usa apenas cookies essenciais para funcionamento. Não uso cookies de rastreamento publicitário ou de
                perfilamento comportamental.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-txt mb-2">9. Contato</h2>
              <p>
                Dúvidas sobre privacidade ou sigilo: <Link href="/#contato" className="text-teal-dark underline">formulário de
                contato</Link>. Verificação do registro profissional:{" "}
                <a
                  href="https://cadastro.cfp.org.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-dark underline"
                >
                  e-Psí / Conselho Federal de Psicologia
                </a>
                .
              </p>
            </section>
          </div>

          <div className="mt-12">
            <Link href="/" className="btn-brand-outline">← Voltar para a home</Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
