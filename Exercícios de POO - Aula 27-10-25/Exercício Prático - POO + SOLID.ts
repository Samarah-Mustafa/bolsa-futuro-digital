//Você é um desenvolvedor em uma plataforma de streaming de jogos online.
// Uma funcionalidade central do sistema é a capacidade de um jogador entrar em diferentes estados de jogo.
// Os estados possíveis são: Offline, Online, Em Jogo, Pausado, Desconectado conforme as seguintes regras de negócio:
//Todo jogador começa no estado "Offline".

//1-O jogador "Offline" pode mudar para "Online".
//2-Um jogador "Online" pode entrar em "Em Jogo" ou ir para "Offline".
//3-Um jogador "Em Jogo" pode ir para "Pausado" ou "Desconectado".
//4-Um jogador "Pausado" pode voltar para "Em Jogo" ou ir para "Desconectado".
//5-Um jogador "Desconectado" volta para "Offline".

interface EstadoJogador {
    ficarOnline(): void;
    iniciarJogo(): void;
    pausarJogo(): void;
    desconectar(): void;
    voltarOffline(): void;
    getNome(): string;
}

class Jogador {
    private estado: EstadoJogador;

    constructor() {
        this.estado = new Offline(this);
        console.log(`Jogador criado. Estado inicial: ${this.estado.getNome()}`);
    }

    public mudarEstado(novoEstado: EstadoJogador): void {
        this.estado = novoEstado;
        console.log(`[SUCESSO] Transição: O jogador agora está ${this.estado.getNome()}.`);
    }

    public ficarOnline(): void {
        console.log(`Tentando ficar online... (Estado atual: ${this.estado.getNome()})`);
        this.estado.ficarOnline();
    }

    public iniciarJogo(): void {
        console.log(`Tentando iniciar um jogo... (Estado atual: ${this.estado.getNome()})`);
        this.estado.iniciarJogo();
    }

    public pausarJogo(): void {
        console.log(`Tentando pausar o jogo... (Estado atual: ${this.estado.getNome()})`);
        this.estado.pausarJogo();
    }

    public desconectar(): void {
        console.log(`Tentando desconectar... (Estado atual: ${this.estado.getNome()})`);
        this.estado.desconectar();
    }

    public voltarOffline(): void {
        console.log(`Tentando voltar para Offline... (Estado atual: ${this.estado.getNome()})`);
        this.estado.voltarOffline();
    }

    public getEstadoAtual(): string {
        return this.estado.getNome();
    }
}

class Offline implements EstadoJogador {
    private nome = "Offline";

    constructor(private jogador: Jogador) {}

    public getNome(): string { return this.nome; }

    private falha(acao: string): void {
        console.log(`[FALHA] Não é possível ${acao} no estado ${this.getNome()}.`);
    }

    public ficarOnline(): void {
        this.jogador.mudarEstado(new Online(this.jogador));
    }

    public iniciarJogo(): void { this.falha("iniciar jogo"); }
    public pausarJogo(): void { this.falha("pausar"); }
    public desconectar(): void { this.falha("desconectar"); }
    public voltarOffline(): void { this.falha("voltar para offline (já está offline)"); }
}

class Online implements EstadoJogador {
    private nome = "Online";

    constructor(private jogador: Jogador) {}

    public getNome(): string { return this.nome; }

    private falha(acao: string): void {
        console.log(`[FALHA] Não é possível ${acao} no estado ${this.getNome()}.`);
    }

    public iniciarJogo(): void {
        this.jogador.mudarEstado(new EmJogo(this.jogador));
    }

    public voltarOffline(): void {
        this.jogador.mudarEstado(new Offline(this.jogador));
    }

    public ficarOnline(): void { this.falha("ficar online (já está online)"); }
    public pausarJogo(): void { this.falha("pausar (não está em jogo)"); }
    public desconectar(): void { this.falha("desconectar"); }
}

class EmJogo implements EstadoJogador {
    private nome = "Em Jogo";

    constructor(private jogador: Jogador) {}

    public getNome(): string { return this.nome; }

    private falha(acao: string): void {
        console.log(`[FALHA] Não é possível ${acao} no estado ${this.getNome()}.`);
    }

    public pausarJogo(): void {
        this.jogador.mudarEstado(new Pausado(this.jogador));
    }

    public desconectar(): void {
        this.jogador.mudarEstado(new Desconectado(this.jogador));
    }

    public ficarOnline(): void { this.falha("ficar online"); }
    public iniciarJogo(): void { this.falha("iniciar jogo (já está em jogo)"); }
    public voltarOffline(): void { this.falha("voltar para offline"); }
}

class Pausado implements EstadoJogador {
    private nome = "Pausado";

    constructor(private jogador: Jogador) {}

    public getNome(): string { return this.nome; }

    private falha(acao: string): void {
        console.log(`[FALHA] Não é possível ${acao} no estado ${this.getNome()}.`);
    }

    public iniciarJogo(): void {
        this.jogador.mudarEstado(new EmJogo(this.jogador));
    }

    public desconectar(): void {
        this.jogador.mudarEstado(new Desconectado(this.jogador));
    }

    public ficarOnline(): void { this.falha("ficar online"); }
    public pausarJogo(): void { this.falha("pausar (já está pausado)"); }
    public voltarOffline(): void { this.falha("voltar para offline"); }
}

class Desconectado implements EstadoJogador {
    private nome = "Desconectado";

    constructor(private jogador: Jogador) {}

    public getNome(): string { return this.nome; }

    private falha(acao: string): void {
        console.log(`[FALHA] Não é possível ${acao} no estado ${this.getNome()}.`);
    }

    public voltarOffline(): void {
        this.jogador.mudarEstado(new Offline(this.jogador));
    }

    public ficarOnline(): void { this.falha("ficar online"); }
    public iniciarJogo(): void { this.falha("iniciar jogo"); }
    public pausarJogo(): void { this.falha("pausar"); }
    public desconectar(): void { this.falha("desconectar (já está desconectado)"); }
}

const jogador = new Jogador();

jogador.ficarOnline(); 
jogador.iniciarJogo();
jogador.pausarJogo();
jogador.iniciarJogo();
jogador.desconectar();
jogador.voltarOffline();

console.log("\nTentativa inválida:");
jogador.iniciarJogo(); // Falha (Offline não pode Iniciar Jogo)