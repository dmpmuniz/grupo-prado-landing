document.addEventListener("DOMContentLoaded", function () {
  console.log("%cGrupo Prado | Gestora de Obras", "font-size:1.5rem;color:#C59B79;font-weight:bold");
  console.log("%cPrévia do site — produto não final, sujeito a aprovação do cliente.", "font-size:0.8rem;color:#888");

  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    console.log("%c[⚠] Conteúdo protegido — site do Grupo Prado | Gestora de Obras.", "color:#C59B79");
  });

  var SITE_URL = "https://dmpmuniz.github.io/grupo-prado-landing/";
  var INSTAGRAM_URL = "https://www.instagram.com/grupopradobr/";
  var DEV_EMAIL = "dmp.muniz@gmail.com";
  var DEV_URL = "https://dmpmuniz.github.io/dmpmuniz/";

  var VENDER_ATIVO = true;

  if (VENDER_ATIVO) {
    var slides = [
      {
        num: "01 / 05",
        title: "Uma Nova Identidade Digital para o Grupo Prado",
        subtitle:
          "Transforme sua presença online com um site profissional, moderno e feito para atrair clientes.",
        body:
          "<p>Apresentamos a nova versão do site do <strong>Grupo Prado | Gestora de Obras</strong> — uma plataforma digital à altura da excelência da sua gestão de obras e regularização imobiliária.</p>" +
          "<p>Este não é apenas um site novo. É uma <strong>ferramenta de vendas</strong> que trabalha 24 horas por dia para fortalecer sua marca, gerar leads e transmitir profissionalismo a cada clique.</p>" +
          "<p>Nos próximos passos, você vai entender por que esta versão é um salto à frente — e como ela pode trazer <strong>resultados reais</strong> para o seu negócio.</p>"
      },
      {
        num: "02 / 05",
        title: "Nova Identidade Visual: A Evolução da Marca",
        subtitle:
          "Cores e tipografia pensadas para comunicar alto padrão, solidez e acolhimento.",
        body:
          "<p>A identidade do Grupo Prado foi elevada a um novo patamar com o conceito <strong>\"Minimalismo Técnico-Premium\"</strong> — o rigor da engenharia unido à elegância de quem constrói sonhos.</p>" +
          '<div class="feature-list">' +
          '<div class="feature-item"><span class="pres-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/><circle cx="12" cy="12" r="3.5"/></svg></span><div><h4>Azul Marinho Profundo (#0B2135)</h4><p>Solidez, confiança e a profundidade do mar de Ilhabela — a base que sustenta cada projeto.</p></div></div>' +
          '<div class="feature-item"><span class="pres-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0 1 16 0v1"/></svg></span><div><h4>Bronze Dourado (#C59B79)</h4><p>Madeira nobre, aquecimento e o toque de alto padrão que diferencia cada obra do Grupo Prado.</p></div></div>' +
          '<div class="feature-item"><span class="pres-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7V4h16v3M9 20h6M12 4v16"/></svg></span><div><h4>Tipografia Moderna</h4><p>Plus Jakarta Sans — uma fonte limpa e contemporânea que comunica precisão técnica e elegância.</p></div></div>' +
          "</div>"
      },
      {
        num: "03 / 05",
        title: "Estrutura que Converte",
        subtitle:
          "Cada seção do novo site foi planejada para transformar visitantes em clientes.",
        body:
          '<div class="feature-list">' +
          '<div class="feature-item"><span class="pres-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-4h6v4"/></svg></span><div><h4>Hero & Serviços</h4><p>Apresentação impactante com foto real de obra + os 4 pilares: gestão de obras, regularização, projetos e consultoria.</p></div></div>' +
          '<div class="feature-item"><span class="pres-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 15l2 2 4-4"/></svg></span><div><h4>Regularização em Destaque</h4><p>Banner dedicado à regularização de imóveis — o carro-chefe com chamada direta para ação.</p></div></div>' +
          '<div class="feature-item"><span class="pres-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0 1 16 0v1"/></svg></span><div><h4>Sobre & Portfólio</h4><p>História da equipe + fotos reais do Instagram do Grupo Prado com filtro por tipo de serviço.</p></div></div>' +
          '<div class="feature-item"><span class="pres-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg></span><div><h4>Contato Direto</h4><p>Seção de contato dedicada com botão para o Instagram oficial da empresa — atendimento próximo e humano.</p></div></div>' +
          "</div>"
      },
      {
        num: "04 / 05",
        title: "Resultados Reais para o Seu Negócio",
        subtitle:
          "Um site profissional não é despesa — é investimento com retorno mensurável.",
        body:
          '<div class="feature-list">' +
          '<div class="feature-item"><span class="pres-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 17H2a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3zM6 17V8a6 6 0 0 1 12 0v9"/></svg></span><div><h4>Mais Credibilidade</h4><p>Um site moderno transmite confiança antes mesmo do primeiro contato.</p></div></div>' +
          '<div class="feature-item"><span class="pres-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></span><div><h4>Maior Alcance</h4><p>Site + Instagram <a href="' + INSTAGRAM_URL + '" target="_blank" style="color:var(--accent);font-weight:600;">@grupopradobr</a> = mais clientes encontrando você.</p></div></div>' +
          '<div class="feature-item"><span class="pres-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></span><div><h4>Zero Custo de Servidor</h4><p>Hospedagem gratuita no GitHub Pages com certificado SSL incluso.</p></div></div>' +
          '<div class="feature-item"><span class="pres-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg></span><div><h4>Fácil Manutenção</h4><p>Código limpo e documentado. Qualquer desenvolvedor pode atualizar rapidamente.</p></div></div>' +
          "</div>"
      },
      {
        num: "05 / 05",
        title: "Pronto para Transformar sua Presença Digital?",
        subtitle:
          "O site já está pronto. As fotos utilizadas são reais — vindas do Instagram oficial @grupopradobr.",
        body:
          '<div class="pricing-box">' +
          '<div class="price-label">Investimento</div>' +
          '<div class="price-value">Sob Consulta</div>' +
          '<div class="price-hint">Incluso: site completo + suporte 30 dias</div>' +
          "</div>" +
          '<p style="text-align:center;font-size:0.95rem;margin-bottom:4px;"><strong>Quer um site profissional como este?</strong></p>' +
          '<p style="text-align:center;font-size:0.85rem;color:var(--text-muted);margin-bottom:12px;">100% personalizado para qualquer negócio — design exclusivo, código sob medida, zero custo de servidor.</p>' +
          '<div class="testimonial-block" style="margin:0 0 8px;text-align:center;font-style:normal;padding:16px 20px;">' +
          '<p style="font-size:0.85rem;margin-bottom:8px;"><span class="pres-icon" style="display:inline-grid;vertical-align:middle;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg></span> <strong>Desenvolvedor: Daniel Muniz</strong></p>' +
          '<p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:8px;">Crio sites institucionais modernos sob medida. Da arquitetura ao comércio local — transformo sua presença digital com design premium e tecnologia de ponta.</p>' +
          '<p style="font-size:0.8rem;margin-bottom:8px;"><span class="pres-icon" style="display:inline-grid;vertical-align:middle;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/></svg></span> <a href="mailto:' + DEV_EMAIL + '" style="color:var(--accent);font-weight:600;">' + DEV_EMAIL + "</a></p>" +
          '<p style="font-size:0.8rem;margin-bottom:0;"><span class="pres-icon" style="display:inline-grid;vertical-align:middle;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></span> <a href="' + DEV_URL + '" target="_blank" style="color:var(--accent);font-weight:600;">dmpmuniz.github.io/dmpmuniz</a> — conheça mais projetos</p>' +
          "</div>"
      }
    ];

    var dialog = document.createElement("dialog");
    dialog.id = "presentation-dialog";
    if ("closedBy" in HTMLDialogElement.prototype) {
      dialog.setAttribute("closedby", "any");
    }
    dialog.innerHTML =
      '<div class="presentation-slide" id="presentation-slide">' +
      '<button class="presentation-close" id="presentation-close" aria-label="Fechar apresentação">&times;</button>' +
      '<div id="presentation-content"></div>' +
      '<div class="presentation-nav">' +
      '<button class="presentation-nav-btn prev" id="pres-prev" aria-label="Slide anterior">← Voltar</button>' +
      '<div class="presentation-dots" id="pres-dots"></div>' +
      '<button class="presentation-nav-btn next" id="pres-next">Avançar →</button>' +
      "</div>" +
      "</div>" +
      '<div class="scroll-arrow" id="scroll-arrow">' +
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C59B79" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>' +
      "</div>";
    document.body.appendChild(dialog);

    var currentSlide = 0;

    var DISCLAIMER_HTML =
      '<div class="slide-disclaimer"><span class="pres-icon" style="color:var(--accent);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg></span><span><strong>Disclaimer:</strong> Esta é uma prévia do site. Produto ainda não final, sujeito a validação e aprovação comercial.</span></div>';

    function renderSlide(index) {
      var s = slides[index];
      var content = document.getElementById("presentation-content");
      content.innerHTML =
        '<div class="slide-number">' +
        s.num +
        "</div>" +
        "<h2>" +
        s.title +
        "</h2>" +
        (s.subtitle ? '<p class="slide-sub">' + s.subtitle + "</p>" : "") +
        '<div class="slide-body">' +
        DISCLAIMER_HTML +
        s.body +
        "</div>";

      var prevBtn = document.getElementById("pres-prev");
      var nextBtn = document.getElementById("pres-next");
      prevBtn.style.visibility = index === 0 ? "hidden" : "visible";

      if (index === slides.length - 1) {
        nextBtn.textContent = "Fechar";
      } else {
        nextBtn.textContent = "Avançar →";
      }

      var dots = document.getElementById("pres-dots");
      dots.innerHTML = "";
      for (var i = 0; i < slides.length; i++) {
        var dot = document.createElement("button");
        dot.className = "presentation-dot" + (i === index ? " active" : "");
        dot.setAttribute("data-index", i);
        dot.setAttribute("aria-label", "Ir para slide " + (i + 1));
        dot.addEventListener("click", function () {
          goTo(parseInt(this.getAttribute("data-index")));
        });
        dots.appendChild(dot);
      }

      var slideEl = dialog.querySelector(".presentation-slide");
      slideEl.scrollTop = 0;

      var arrow = document.getElementById("scroll-arrow");
      setTimeout(function () {
        if (slideEl.scrollHeight > slideEl.clientHeight) {
          arrow.classList.add("visible");
        } else {
          arrow.classList.remove("visible");
        }
      }, 50);

      slideEl.onscroll = function () {
        if (slideEl.scrollHeight - slideEl.scrollTop - slideEl.clientHeight < 20) {
          arrow.classList.remove("visible");
        } else {
          arrow.classList.add("visible");
        }
      };
    }

    function goTo(index) {
      if (index < 0 || index >= slides.length) return;
      currentSlide = index;
      renderSlide(index);
    }

    function next() {
      if (currentSlide === slides.length - 1) {
        fecharApresentacao();
        return;
      }
      goTo(currentSlide + 1);
    }

    function prev() {
      goTo(currentSlide - 1);
    }

    function abrirApresentacao() {
      currentSlide = 0;
      dialog.showModal();
      renderSlide(0);
      document.body.style.overflow = "hidden";
    }

    function fecharApresentacao() {
      dialog.close();
      document.body.style.overflow = "";
    }

    document.getElementById("presentation-close").addEventListener("click", fecharApresentacao);
    document.getElementById("pres-next").addEventListener("click", next);
    document.getElementById("pres-prev").addEventListener("click", prev);

    // Fallback: click on backdrop closes (for browsers without closedby="any")
    if (!("closedBy" in HTMLDialogElement.prototype)) {
      dialog.addEventListener("click", function (e) {
        if (e.target === dialog) fecharApresentacao();
      });
    }

    // Native cancel event handles Escape key
    dialog.addEventListener("cancel", function (e) {
      e.preventDefault();
      fecharApresentacao();
    });

    document.addEventListener("keydown", function (e) {
      if (!dialog.open) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    });

    var floatBtn = document.createElement("div");
    floatBtn.id = "float-apresentacao";
    floatBtn.innerHTML =
      '<button class="float-close" id="float-close" aria-label="Fechar">&times;</button>' +
      '<button class="float-body" id="float-body">' +
      '<span class="pres-icon"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></span>' +
      '<span class="float-text">Apresentação</span>' +
      "</button>";
    document.body.appendChild(floatBtn);

    document.getElementById("float-body").addEventListener("click", abrirApresentacao);
    document.getElementById("float-close").addEventListener("click", function (e) {
      e.stopPropagation();
      floatBtn.style.display = "none";
    });

    abrirApresentacao();
  }
});
