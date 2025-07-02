// Script do Portfólio - Rodrigo de Carvalho Costa
// Feito com muito café e dedicação 😄

// Espera a página carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Portfólio carregado! Bem-vindo!');
    
    // Inicializa todas as funções
    iniciarMenu();
    efeitoDigitacao();
    animacoesScroll();
    barrasHabilidades();
    formularioContato();
    scrollSuave();
    animacaoNumeros();
});

// ===== MENU RESPONSIVO =====
function iniciarMenu() {
    const botaoMenu = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');
    const linksMenu = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');

    // Abre e fecha o menu no mobile
    if (botaoMenu) {
        botaoMenu.addEventListener('click', function() {
            botaoMenu.classList.toggle('active');
            menu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }

    // Fecha o menu quando clica em um link
    linksMenu.forEach(link => {
        link.addEventListener('click', function() {
            botaoMenu.classList.remove('active');
            menu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Efeito do header no scroll
    let ultimoScroll = 0;
    window.addEventListener('scroll', function() {
        const scrollAtual = window.pageYOffset;
        
        // Muda a cor do header quando rola a página
        if (scrollAtual > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
        }

        // Esconde o header quando rola pra baixo
        if (scrollAtual > ultimoScroll && scrollAtual > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        ultimoScroll = scrollAtual;
    });

    // Destaca o link ativo no menu
    atualizarLinkAtivo();
    window.addEventListener('scroll', atualizarLinkAtivo);
}

function atualizarLinkAtivo() {
    const secoes = document.querySelectorAll('section[id], main > section');
    const linksMenu = document.querySelectorAll('.nav-link');
    
    let secaoAtual = '';
    secoes.forEach(secao => {
        const topoSecao = secao.offsetTop;
        if (window.pageYOffset >= topoSecao - 200) {
            secaoAtual = secao.getAttribute('id') || secao.className.split(' ')[0];
        }
    });

    linksMenu.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(secaoAtual)) {
            link.classList.add('active');
        }
    });
}

// ===== EFEITO DE DIGITAÇÃO =====
function efeitoDigitacao() {
    const elemento = document.querySelector('.typed-text');
    if (!elemento) return;

    // Textos que vão aparecer digitando
    const textos = [
        'Desenvolvedor Frontend',
        'Estudante de ADS',
        'Apaixonado por Tecnologia',
        'Futuro Programador'
    ];
    
    let indiceTexto = 0;
    let indiceLetra = 0;
    let apagando = false;
    let velocidade = 100;

    function digitar() {
        const textoAtual = textos[indiceTexto];
        
        if (apagando) {
            // Apagando o texto
            elemento.textContent = textoAtual.substring(0, indiceLetra - 1);
            indiceLetra--;
            velocidade = 50;
        } else {
            // Digitando o texto
            elemento.textContent = textoAtual.substring(0, indiceLetra + 1);
            indiceLetra++;
            velocidade = 100;
        }

        // Quando termina de digitar
        if (!apagando && indiceLetra === textoAtual.length) {
            velocidade = 2000; // Pausa antes de apagar
            apagando = true;
        } 
        // Quando termina de apagar
        else if (apagando && indiceLetra === 0) {
            apagando = false;
            indiceTexto = (indiceTexto + 1) % textos.length; // Próximo texto
            velocidade = 500;
        }

        setTimeout(digitar, velocidade);
    }

    digitar(); // Inicia o efeito
}

// ===== ANIMAÇÕES NO SCROLL =====
function animacoesScroll() {
    // Configuração do observador
    const opcoes = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observador = new IntersectionObserver(function(elementos) {
        elementos.forEach(elemento => {
            if (elemento.isIntersecting) {
                elemento.target.classList.add('animate-fade-in-up');
                
                // Delay para cards ficarem mais legais
                if (elemento.target.classList.contains('skill-card') || 
                    elemento.target.classList.contains('project-card')) {
                    
                    const posicao = Array.from(elemento.target.parentNode.children).indexOf(elemento.target);
                    elemento.target.style.animationDelay = `${posicao * 100}ms`;
                }
            }
        });
    }, opcoes);

    // Elementos que vão ter animação
    const elementosAnimados = document.querySelectorAll(`
        .skill-card, .project-card, .stat-item, 
        .contact-method, .faq-item
    `);

    elementosAnimados.forEach(el => observador.observe(el));
}

// ===== BARRAS DE HABILIDADES =====
function barrasHabilidades() {
    const barras = document.querySelectorAll('.skill-progress');
    
    const observadorBarras = new IntersectionObserver(function(elementos) {
        elementos.forEach(elemento => {
            if (elemento.isIntersecting) {
                const barra = elemento.target;
                const nivel = barra.getAttribute('data-level') || '0';
                
                // Anima a barra depois de meio segundo
                setTimeout(() => {
                    barra.style.width = nivel + '%';
                }, 500);
                
                observadorBarras.unobserve(barra);
            }
        });
    }, { threshold: 0.5 });

    barras.forEach(barra => observadorBarras.observe(barra));
}

// ===== FORMULÁRIO DE CONTATO =====
function formularioContato() {
    const formulario = document.getElementById('contactForm');
    const mensagem = document.getElementById('formMessage');
    
    if (!formulario) return;

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const botaoEnviar = formulario.querySelector('.form-submit');
        const dados = new FormData(formulario);
        
        // Validação simples
        const nome = dados.get('name').trim();
        const email = dados.get('email').trim();
        const mensagemTexto = dados.get('message').trim();
        
        if (!nome || !email || !mensagemTexto) {
            mostrarMensagem('Preencha todos os campos, por favor!', 'error');
            return;
        }
        
        if (!emailValido(email)) {
            mostrarMensagem('E-mail inválido!', 'error');
            return;
        }
        
        // Simula o envio
        botaoEnviar.classList.add('loading');
        
        setTimeout(() => {
            botaoEnviar.classList.remove('loading');
            mostrarMensagem('Mensagem enviada! Vou responder em breve 😊', 'success');
            formulario.reset();
        }, 2000);
    });
    
    function mostrarMensagem(texto, tipo) {
        mensagem.textContent = texto;
        mensagem.className = `form-message ${tipo}`;
        mensagem.style.display = 'block';
        
        setTimeout(() => {
            mensagem.style.display = 'none';
        }, 5000);
    }
    
    function emailValido(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
}

// ===== SCROLL SUAVE =====
function scrollSuave() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const destino = this.getAttribute('href').substring(1);
            const elemento = document.getElementById(destino);
            
            if (elemento) {
                const alturaHeader = document.querySelector('.header').offsetHeight;
                const posicao = elemento.offsetTop - alturaHeader;
                
                window.scrollTo({
                    top: posicao,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== ANIMAÇÃO DOS NÚMEROS =====
function animacaoNumeros() {
    const numeros = document.querySelectorAll('.stat-number');
    
    const observadorNumeros = new IntersectionObserver(function(elementos) {
        elementos.forEach(elemento => {
            if (elemento.isIntersecting) {
                const numero = elemento.target;
                const valorFinal = numero.textContent;
                
                if (!isNaN(valorFinal)) {
                    animarNumero(numero, 0, parseInt(valorFinal), 2000);
                }
                
                observadorNumeros.unobserve(numero);
            }
        });
    }, { threshold: 0.5 });
    
    numeros.forEach(num => observadorNumeros.observe(num));
}

function animarNumero(elemento, inicio, fim, duracao) {
    const tempoInicio = performance.now();
    
    function atualizar(tempoAtual) {
        const tempoDecorrido = tempoAtual - tempoInicio;
        const progresso = Math.min(tempoDecorrido / duracao, 1);
        
        const numeroAtual = Math.floor(inicio + (fim - inicio) * progresso);
        elemento.textContent = numeroAtual;
        
        if (progresso < 1) {
            requestAnimationFrame(atualizar);
        } else {
            elemento.textContent = fim;
        }
    }
    
    requestAnimationFrame(atualizar);
}

// ===== FAQ ACCORDION =====
document.addEventListener('DOMContentLoaded', function() {
    const perguntasFaq = document.querySelectorAll('.faq-item');
    
    perguntasFaq.forEach(item => {
        const pergunta = item.querySelector('.faq-question');
        
        pergunta.addEventListener('click', function() {
            const estaAberto = item.classList.contains('active');
            
            // Fecha todas as outras perguntas
            perguntasFaq.forEach(outroItem => {
                if (outroItem !== item) {
                    outroItem.classList.remove('active');
                }
            });
            
            // Abre ou fecha a pergunta atual
            item.classList.toggle('active', !estaAberto);
        });
    });
});

// ===== EFEITOS VISUAIS =====
document.addEventListener('DOMContentLoaded', function() {
    // Efeito hover nos cards
    const cards = document.querySelectorAll('.skill-card, .project-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Efeito ripple nos botões (bem simples)
    const botoes = document.querySelectorAll('.btn');
    
    botoes.forEach(botao => {
        botao.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const tamanho = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - tamanho / 2;
            const y = e.clientY - rect.top - tamanho / 2;
            
            ripple.style.width = ripple.style.height = tamanho + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            // Remove o efeito depois de um tempo
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// ===== CONTROLE DE PERFORMANCE =====
// Função para não sobrecarregar o scroll
function throttle(func, delay) {
    let timeoutId;
    let lastExecTime = 0;
    return function (...args) {
        const currentTime = Date.now();
        
        if (currentTime - lastExecTime > delay) {
            func.apply(this, args);
            lastExecTime = currentTime;
        } else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                lastExecTime = Date.now();
            }, delay - (currentTime - lastExecTime));
        }
    };
}

// ===== ACESSIBILIDADE =====
document.addEventListener('keydown', function(e) {
    // Fecha menu com ESC
    if (e.key === 'Escape') {
        const botaoMenu = document.querySelector('.nav-toggle');
        const menu = document.querySelector('.nav-menu');
        
        if (menu.classList.contains('active')) {
            botaoMenu.classList.remove('active');
            menu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
        
        // Fecha FAQ aberto
        const faqAberto = document.querySelector('.faq-item.active');
        if (faqAberto) {
            faqAberto.classList.remove('active');
        }
    }
});

// ===== DETECÇÃO DE DISPOSITIVO =====
function ehMobile() {
    return window.innerWidth <= 768;
}

// Ajusta comportamento no resize
window.addEventListener('resize', function() {
    const menu = document.querySelector('.nav-menu');
    const botaoMenu = document.querySelector('.nav-toggle');
    
    if (!ehMobile()) {
        menu.classList.remove('active');
        botaoMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// ===== LOADING DA PÁGINA =====
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    console.log('✅ Tudo carregado! Portfolio do Rodrigo pronto para impressionar! 🚀');
});

// ===== CSS PARA EFEITOS =====
const estilosExtras = `
.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple-effect 0.6s linear;
    pointer-events: none;
}

@keyframes ripple-effect {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

.btn {
    position: relative;
    overflow: hidden;
}
`;

// Adiciona os estilos na página
const style = document.createElement('style');
style.textContent = estilosExtras;
document.head.appendChild(style);

// Mensagem final no console
console.log('🎓 Portfolio criado por Rodrigo de Carvalho Costa');
console.log('📚 Estudante de Análise e Desenvolvimento de Sistemas');
console.log('🇧🇷 Feito no Brasil com muito ☕ e dedicação!');

