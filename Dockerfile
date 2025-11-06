# ==========================================================
# Dockerfile - Ionic 3.9.2 + Angular 5 + Firebase + RxJS 5
# ==========================================================

# Node 10.x é o mais estável para esse stack
FROM node:10.24.1

# Diretório de trabalho
WORKDIR /app

# 🔧 Corrige repositórios antigos da Debian Stretch
RUN sed -i 's|deb.debian.org|archive.debian.org|g' /etc/apt/sources.list && \
    sed -i 's|security.debian.org|archive.debian.org|g' /etc/apt/sources.list && \
    sed -i '/stretch-updates/d' /etc/apt/sources.list && \
    apt-get clean && apt-get update -o Acquire::Check-Valid-Until=false -o Acquire::AllowInsecureRepositories=true

# 🧰 Instala dependências de build (necessárias pro grpc)
RUN apt-get install -y --no-install-recommends \
    python \
    make \
    g++ \
    build-essential \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Instala Ionic e Cordova globalmente
RUN npm install -g ionic@3.20.1 cordova@8.1.2

# Copia o package.json da aplicação
COPY ./package*.json ./

# Instala dependências (sem cache de versões mais novas)
RUN npm install --legacy-peer-deps

# Força versões antigas para evitar conflito
RUN npm install rxjs@5.5.10 rxjs-compat@6.2.2 --save-exact

# Copia todo o restante da aplicação
COPY . .

# Expõe as portas do Ionic (serve e livereload)
EXPOSE 8100 35729 53703

# Comando padrão
CMD ["ionic", "serve", "--host", "0.0.0.0", "--port", "8100", "--no-open", "--no-interactive"]
