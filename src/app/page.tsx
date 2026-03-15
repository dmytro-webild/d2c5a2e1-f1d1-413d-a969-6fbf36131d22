"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { CheckCircle, Package, Truck, MapPin, MessageSquare } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="mediumLarge"
      sizing="largeSmallSizeMediumTitles"
      background="noise"
      cardStyle="gradient-mesh"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Portão e Gava"
          navItems={[
            { name: "Sobre", id: "about" },
            { name: "Produtos", id: "products" },
            { name: "Entregas", id: "delivery" },
            { name: "Contato", id: "contact" }
          ]}
          button={{ text: "📞 Ligue Agora", href: "tel:+551699166588" }}
        />
      </div>

      <div id="hero" data-section="hero" className="relative overflow-hidden py-12 md:py-20">
        <HeroSplitDoubleCarousel
          title="Materiais de Construção e Ferramentas de Qualidade"
          description="A Portão e Gava é sua melhor opção para materiais de construção, ferramentas e suprimentos para suas obras em Jardinópolis. Temos tudo o que você precisa com preços ótimos e atendimento dedicado."
          tag="Confiável & Rápido"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          background={{ variant: "animated-grid" }}
          leftCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/salesman-standing-front-showcases_114579-2802.jpg", imageAlt: "Materiais de construção sortidos" },
            { imageSrc: "http://img.b2bpic.net/free-photo/carpenter-tools_23-2147773343.jpg", imageAlt: "Ferramentas profissionais" }
          ]}
          rightCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/portrait-woman-with-mask-shopping_23-2148630846.jpg", imageAlt: "Interior da loja Portão e Gava" },
            { imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-with-pallet-truck_23-2148902572.jpg", imageAlt: "Serviço de entrega" }
          ]}
          carouselPosition="right"
          buttons={[
            { text: "📞 Ligar Agora", href: "tel:+551699166588" },
            { text: "💬 WhatsApp", href: "https://wa.me/551699166588" }
          ]}
          buttonAnimation="blur-reveal"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/young-builder-man-wearing-construction-uniform-safety-helmet-smiles-shows-fingers_141793-33726.jpg", alt: "Cliente satisfeito" },
            { src: "http://img.b2bpic.net/free-photo/smiling-young-blonde-engineer-builder-girl-uniform-dental-braces-holding-open-end-pipe-wrenches-standing-with-closed-posture-isolated-white-space-with-copy-space_141793-92554.jpg", alt: "Cliente satisfeito" },
            { src: "http://img.b2bpic.net/free-photo/side-view-smiley-man-with-vest-helmet_23-2148269392.jpg", alt: "Cliente satisfeito" }
          ]}
          avatarText="Mais de 25 clientes satisfeitos"
        />
      </div>

      <div id="about" data-section="about" className="relative py-12 md:py-16">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "Sobre a " },
            { type: "text", content: "Portão e Gava" }
          ]}
          useInvertedBackground={false}
          buttons={[
            { text: "Saiba Mais", href: "#products" }
          ]}
        />
      </div>

      <div id="products" data-section="products" className="relative py-12 md:py-20">
        <FeatureCardOne
          title="Categorias de Produtos"
          description="Temos uma ampla variedade de materiais de construção e ferramentas para todos os tipos de projetos. Desde concreto até acabamentos, temos tudo em estoque."
          tag="Estoque Completo"
          tagIcon={Package}
          tagAnimation="slide-up"
          features={[
            {
              title: "Cimento e Concreto",              description: "Cimento, areia, brita, blocos de concreto e demais materiais para fundação e estrutura.",              imageSrc: "http://img.b2bpic.net/free-photo/male-photographer-exploring-urban-environment-with-grunge-aesthetic_23-2150943460.jpg",              imageAlt: "Cimento e materiais de concreto"
            },
            {
              title: "Tijolos e Blocos",              description: "Tijolos cerâmicos, blocos estruturais e de vedação de primeira qualidade.",              imageSrc: "http://img.b2bpic.net/free-photo/display-dark-charcoal-different-forms-shapes_23-2149654211.jpg",              imageAlt: "Tijolos e blocos de construção"
            },
            {
              title: "Ferramentas",              description: "Ferramentas profissionais de marcas confiáveis para todos os tipos de trabalho.",              imageSrc: "http://img.b2bpic.net/free-vector/flat-construction-tools-collection_23-2148185757.jpg",              imageAlt: "Ferramentas e equipamentos"
            },
            {
              title: "Hidráulica",              description: "Canos, conexões, registros e todos os materiais hidráulicos para instalações.",              imageSrc: "http://img.b2bpic.net/free-photo/modern-autonomous-heating-system-boiler-room_169016-51414.jpg",              imageAlt: "Materiais hidráulicos e de encanamento"
            },
            {
              title: "Elétrica",              description: "Fios, cabos, interruptores, tomadas e materiais elétricos de qualidade garantida.",              imageSrc: "http://img.b2bpic.net/free-photo/coloured-sleeves-crimp-terminals-different-wire-sizes_169016-25065.jpg",              imageAlt: "Materiais elétricos e fios"
            },
            {
              title: "Tintas e Acabamento",              description: "Tintas, vernizes, massa de vidro e todos os produtos para acabamento final.",              imageSrc: "http://img.b2bpic.net/free-photo/top-view-collection-paint-supplies-with-copy-space_23-2148563678.jpg",              imageAlt: "Tintas e produtos de acabamento"
            }
          ]}
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "Solicitar Orçamento", href: "#contact-form" }
          ]}
        />
      </div>

      <div id="delivery" data-section="delivery" className="relative py-12 md:py-16">
        <MetricCardTwo
          title="Serviço de Entrega Rápida"
          description="Contamos com serviço de entrega para canteiros de obra e residências em toda a região de Jardinópolis. Entrega rápida, segura e com atendimento de qualidade."
          tag="Logística Eficiente"
          tagIcon={Truck}
          tagAnimation="slide-up"
          metrics={[
            { id: "1", value: "24h", description: "Entrega em até 24 horas" },
            { id: "2", value: "Até 15km", description: "Raio de entrega na região" },
            { id: "3", value: "Sem Taxa", description: "Acima de R$ 500" }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "Solicitar Entrega", href: "#contact-form" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials" className="relative py-12 md:py-20">
        <TestimonialCardSixteen
          title="O Que Nossos Clientes Dizem"
          description="Temos mais de 25 avaliações positivas de clientes satisfeitos com nossos produtos e serviço."
          tag="4.6 ⭐ Avaliação"
          tagAnimation="slide-up"
          testimonials={[
            { id: "1", name: "João Silva", role: "Construtor", company: "JS Construções", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/smiling-adult-builder-man-uniform-gestures-ok-hand-sign-isolated-olive-green-wall_141793-66289.jpg", imageAlt: "João Silva" },
            { id: "2", name: "Maria Santos", role: "Proprietária", company: "Residencial Santos", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-carrying-shopping-bags_23-2148660771.jpg", imageAlt: "Maria Santos" },
            { id: "3", name: "Pedro Costa", role: "Engenheiro", company: "Construtora Costa", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/handsome-hispanic-man-wearing-suit-tie-pointing-aside-with-hands-open-palms-showing-copy-space-presenting-advertisement-smiling-excited-happy_839833-11135.jpg", imageAlt: "Pedro Costa" },
            { id: "4", name: "Ana Oliveira", role: "Fornecedora", company: "Obras Oliveira", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/joy-success-excitement-happiness-concept-beautiful-happy-stylish-young-european-female-wearing-round-eyeglasses-clenching-her-fists-ad-smiling-broadly_343059-382.jpg", imageAlt: "Ana Oliveira" },
            { id: "5", name: "Carlos Mendez", role: "Mestre de Obra", company: "Equipe Mendez", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/smiling-adult-builder-man-stands-with-crossed-arms-isolated-olive-green-wall_141793-66551.jpg", imageAlt: "Carlos Mendez" },
            { id: "6", name: "Fernanda Rosa", role: "Arquiteta", company: "Projetos Rosa", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/important-project-very-important-client_329181-11470.jpg", imageAlt: "Fernanda Rosa" }
          ]}
          kpiItems={[
            { value: "25+", label: "Reviews Google" },
            { value: "4.6⭐", label: "Classificação" },
            { value: "Confiável", label: "Reputação Local" }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          carouselMode="buttons"
        />
      </div>

      <div id="location" data-section="location" className="relative py-12 md:py-16">
        <ContactSplit
          tag="Localização"
          title="Visite Nossa Loja"
          description="Estamos localizados em Jardinópolis, SP. Aberto de segunda a sexta-feira a partir das 7h da manhã. Você pode nos encontrar facilmente e contar com todo o suporte que precisa."
          tagIcon={MapPin}
          tagAnimation="slide-up"
          background={{ variant: "animated-grid" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-vector/top-view-hand-drawn-road-map_23-2147578881.jpg"
          imageAlt="Localização da loja Portão e Gava"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="Seu email"
          buttonText="Obter Direções"
        />
      </div>

      <div id="contact" data-section="contact" className="relative py-12 md:py-20">
        <FaqBase
          title="Perguntas Frequentes"
          description="Encontre respostas para as perguntas mais comuns sobre nossos produtos, entrega e atendimento."
          tag="FAQ"
          tagAnimation="slide-up"
          faqs={[
            { id: "1", title: "Qual é o horário de funcionamento?", content: "Abrimos de segunda a sexta-feira às 7h da manhã. Consulte nosso WhatsApp para informações sobre sábados e domingos." },
            { id: "2", title: "Fazem entrega em toda a região?", content: "Sim, fazemos entregas em um raio de até 15km de Jardinópolis. A entrega é gratuita para compras acima de R$ 500." },
            { id: "3", title: "Como faço um orçamento?", content: "Você pode ligar diretamente para +55 16 99166-5881, enviar mensagem pelo WhatsApp ou preencher o formulário de contato." },
            { id: "4", title: "Vocês entregam no mesmo dia?", content: "Fazemos o máximo de esforço para entregar no mesmo dia quando o pedido é feito até o meio da tarde. Confirme com nosso atendimento." },
            { id: "5", title: "Qual é a forma de pagamento?", content: "Aceitamos dinheiro, cartão de débito e crédito. Consulte sobre condições especiais para pagamento à vista." },
            { id: "6", title: "Vendem no varejo e no atacado?", content: "Sim! Atendemos tanto clientes que compram pequenas quantidades quanto grandes compradores. Temos preços especiais para obras." }
          ]}
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          showCard={true}
        />
      </div>

      <div id="contact-form" data-section="contact-form" className="relative py-12 md:py-16">
        <ContactSplit
          tag="Fale Conosco"
          title="Solicite um Orçamento ou Tire Suas Dúvidas"
          description="Preencha o formulário abaixo e nossa equipe responderá o mais rápido possível. Você também pode ligar ou enviar mensagem no WhatsApp."
          tagIcon={MessageSquare}
          tagAnimation="slide-up"
          background={{ variant: "animated-grid" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/happy-woman-talking-phone_1098-3124.jpg"
          imageAlt="Suporte e atendimento ao cliente"
          mediaAnimation="slide-up"
          mediaPosition="left"
          inputPlaceholder="Seu melhor email"
          buttonText="Enviar Mensagem"
          termsText="Ao enviar, você concorda com nossa Política de Privacidade e Termos de Serviço."
        />
      </div>

      <div id="footer" data-section="footer" className="relative py-8 md:py-12">
        <FooterBase
          logoText="Portão e Gava"
          copyrightText="© 2025 Portão e Gava Materiais de Construção e Ferramentas. Todos os direitos reservados."
          columns={[
            {
              title: "Navegação",              items: [
                { label: "Sobre", href: "#about" },
                { label: "Produtos", href: "#products" },
                { label: "Entregas", href: "#delivery" },
                { label: "Contato", href: "#contact" }
              ]
            },
            {
              title: "Contato",              items: [
                { label: "📞 +55 16 99166-5881", href: "tel:+551699166588" },
                { label: "💬 WhatsApp", href: "https://wa.me/551699166588" },
                { label: "📍 Jardinópolis, SP", href: "#location" },
                { label: "✉️ Enviar Mensagem", href: "#contact-form" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Política de Privacidade", href: "#privacy" },
                { label: "Termos de Serviço", href: "#terms" },
                { label: "Política de Entregas", href: "#shipping" },
                { label: "Devolução e Reembolso", href: "#returns" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
