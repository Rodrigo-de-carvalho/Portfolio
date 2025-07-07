// Script do Portfólio - Rodrigo de Carvalho Costa
// Feito com carinho e muito JavaScript! 🚀

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎉 Portfólio carregado com sucesso!');
    
    // Inicializar todas as funcionalidades
    iniciarMenuMobile();
    iniciarEfeitoDigitacao();
    iniciarAnimacoesScroll();
    iniciarBarrasProgresso();
    iniciarFiltrosProjetos();
    iniciarFAQ();
    iniciarFormularioContato();
    iniciarScrollSuave();
    iniciarTouchEvents();
    
    console.log('✅ Todas as funcionalidades foram inicializadas!');
});

// Menu mobile responsivo
function iniciarMenuMobile() {
    const menuToggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');
    const menuLinks = document.querySelectorAll('.nav-link');
    
    if (!menuToggle || !menu) return;
    
    // Toggle do menu
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        menu.classList.toggle('active');
        
        // Prevenir scroll do body quando menu estiver aberto
        if (menu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Fechar menu ao clicar em um link
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            menu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Fechar menu ao clicar fora dele
    document.addEventListener('click', function(e) {
        if (!menuToggle.contains(e.target) && !menu.contains(e.target)) {
            menuToggle.classList.remove('active');
            menu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Fechar menu ao redimensionar a tela
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            menuToggle.classList.remove('active');
            menu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Efeito de digitação no hero
function iniciarEfeitoDigitacao() {
    const elementoTexto = document.querySelector('.typed-text');
    if (!elementoTexto) return;
    
    const textos = [
        'Desenvolvedor Frontend',
        'Estudante de ADS',
        'Apaixonado por Tecnologia',
        'Criador de Soluções'
    ];
    
    let textoAtual = 0;
    let caracterAtual = 0;
    let deletando = false;
    
    function digitar() {
        const textoCompleto = textos[textoAtual];
        
        if (deletando) {
            elementoTexto.textContent = textoCompleto.substring(0, caracterAtual - 1);
            caracterAtual--;
        } else {
            elementoTexto.textContent = textoCompleto.substring(0, caracterAtual + 1);
            caracterAtual++;
        }
        
        let velocidade = deletando ? 50 : 100;
        
        if (!deletando && caracterAtual === textoCompleto.length) {
            velocidade = 2000; // Pausa no final
            deletando = true;
        } else if (deletando && caracterAtual === 0) {
            deletando = false;
            textoAtual = (textoAtual + 1) % textos.length;
            velocidade = 500; // Pausa antes do próximo texto
        }
        
        setTimeout(digitar, velocidade);
    }
    
    digitar();
}

// Animações no scroll
function iniciarAnimacoesScroll() {
    const elementos = document.querySelectorAll('.skill-card, .project-card, .process-step, .tech-card, .future-card, .timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elementos.forEach(elemento => {
        elemento.style.opacity = '0';
        elemento.style.transform = 'translateY(30px)';
        elemento.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(elemento);
    });
}

// Barras de progresso das habilidades
function iniciarBarrasProgresso() {
    const barras = document.querySelectorAll('.skill-progress, .tech-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const barra = entry.target;
                const porcentagem = barra.getAttribute('data-width') || '75';
                
                setTimeout(() => {
                    barra.style.width = porcentagem + '%';
                }, 200);
            }
        });
    }, { threshold: 0.5 });
    
    barras.forEach(barra => {
        barra.style.width = '0%';
        observer.observe(barra);
    });
}

// Filtros de projetos
function iniciarFiltrosProjetos() {
    const botoesFiltro = document.querySelectorAll('.filter-btn');
    const projetos = document.querySelectorAll('.project-card-detailed');
    
    if (botoesFiltro.length === 0) return;
    
    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', function() {
            // Remover classe active de todos os botões
            botoesFiltro.forEach(btn => btn.classList.remove('active'));
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            
            const filtro = this.getAttribute('data-filter');
            
            projetos.forEach(projeto => {
                if (filtro === 'all' || projeto.getAttribute('data-category').includes(filtro)) {
                    projeto.style.display = 'block';
                    projeto.style.opacity = '0';
                    projeto.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        projeto.style.opacity = '1';
                        projeto.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    projeto.style.opacity = '0';
                    projeto.style.transform = 'translateY(-20px)';
                    
                    setTimeout(() => {
                        projeto.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// FAQ interativo
function iniciarFAQ() {
    const itensFAQ = document.querySelectorAll('.faq-item');
    
    itensFAQ.forEach(item => {
        const pergunta = item.querySelector('.faq-question');
        const resposta = item.querySelector('.faq-answer');
        
        if (!pergunta || !resposta) return;
        
        pergunta.addEventListener('click', function() {
            const estaAtivo = item.classList.contains('active');
            
            // Fechar todos os outros itens
            itensFAQ.forEach(outroItem => {
                if (outroItem !== item) {
                    outroItem.classList.remove('active');
                }
            });
            
            // Toggle do item atual
            if (estaAtivo) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
}

// Formulário de contato
function iniciarFormularioContato() {
    const formulario = document.querySelector('.contact-form');
    
    if (!formulario) return;
    
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const botaoSubmit = formulario.querySelector('.form-submit');
        const mensagem = formulario.querySelector('.form-message');
        
        // Mostrar loading
        botaoSubmit.classList.add('loading');
        
        // Simular envio (aqui você conectaria com um backend real)
        setTimeout(() => {
            botaoSubmit.classList.remove('loading');
            
            if (mensagem) {
                mensagem.className = 'form-message success';
                mensagem.textContent = 'Mensagem enviada com sucesso! Entrarei em contato em breve.';
                mensagem.style.display = 'block';
                
                // Limpar formulário
                formulario.reset();
                
                // Esconder mensagem após 5 segundos
                setTimeout(() => {
                    mensagem.style.display = 'none';
                }, 5000);
            }
        }, 2000);
    });
}

// Scroll suave
function iniciarScrollSuave() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Compensar header fixo
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Touch events para dispositivos móveis
function iniciarTouchEvents() {
    // Melhorar experiência de toque nos cards
    const cards = document.querySelectorAll('.project-card, .skill-card, .process-step, .tech-card, .future-card');
    
    cards.forEach(card => {
        let touchStartY = 0;
        let touchEndY = 0;
        
        card.addEventListener('touchstart', function(e) {
            touchStartY = e.changedTouches[0].screenY;
            this.style.transform = 'scale(0.98)';
        }, { passive: true });
        
        card.addEventListener('touchend', function(e) {
            touchEndY = e.changedTouches[0].screenY;
            this.style.transform = '';
            
            // Se foi um tap (não scroll), adicionar efeito visual
            if (Math.abs(touchEndY - touchStartY) < 10) {
                this.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }
        }, { passive: true });
        
        card.addEventListener('touchcancel', function() {
            this.style.transform = '';
        }, { passive: true });
    });
    
    // Melhorar navegação por toque
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('touchstart', function() {
            this.style.backgroundColor = 'rgba(59, 130, 246, 0.2)';
        }, { passive: true });
        
        link.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.backgroundColor = '';
            }, 150);
        }, { passive: true });
    });
}

// Função para detectar dispositivo móvel
function ehDispositivoMovel() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Função para detectar orientação
function detectarOrientacao() {
    if (ehDispositivoMovel()) {
        const orientacao = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
        document.body.setAttribute('data-orientation', orientacao);
    }
}

// Detectar mudanças de orientação
window.addEventListener('orientationchange', function() {
    setTimeout(detectarOrientacao, 100);
});

// Detectar orientação inicial
detectarOrientacao();

// Performance: Lazy loading para imagens
function iniciarLazyLoading() {
    const imagens = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    imagens.forEach(img => imageObserver.observe(img));
}

// Inicializar lazy loading se houver imagens com data-src
if (document.querySelectorAll('img[data-src]').length > 0) {
    iniciarLazyLoading();
}

// Debug para desenvolvimento
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('🔧 Modo de desenvolvimento ativo');
    console.log('📱 Dispositivo móvel:', ehDispositivoMovel());
    console.log('📐 Viewport:', window.innerWidth + 'x' + window.innerHeight);
}

// Função para reportar erros (útil para debug)
window.addEventListener('error', function(e) {
    console.error('❌ Erro no JavaScript:', e.error);
});

console.log('🎯 Script do portfólio carregado com sucesso!');

