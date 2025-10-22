//Faça um programa que simule um televisor criando-o como um objeto:
//O usuário deve ser capaz de informar o número do canal e aumentar ou diminuir o volume.
//Certifique-se de que o número do canal e o nível do volume permanecem dentro de faixas válidas.
class Televisor {
    private _canal: number;
    private _volume: number;

    constructor(            
        canalInicial: number = 1,   
        volumeInicial: number = 10
    ) {
        this._canal = canalInicial;
        this._volume = volumeInicial;
    }

    get canal(): number {
        return this._canal;
    }
    get volume(): number {
        return this._volume;
    }
    set canal(novoCanal: number) {
        if (novoCanal >= 1 && novoCanal <= 100) {
            this._canal = novoCanal;
        } else {
            console.log("Canal inválido. Escolha um canal entre 1 e 100.");
        }
    }

    set volume(novoVolume: number) {
        if (novoVolume >= 0 && novoVolume <= 100) {
            this._volume = novoVolume;
        } else {
            console.log("Volume inválido. Escolha um volume entre 0 e 100.");
        }
    }
    aumentarVolume(): void {
        if (this._volume < 100) {
            this._volume++;
        } else {
            console.log("Volume já está no máximo.");
        }
    }
    diminuirVolume(): void {
        if (this._volume > 0) {
            this._volume--;
        } else {
            console.log("Volume já está no mínimo.");
        }
    }
    mudarCanal(novoCanal: number): void {
        this.canal = novoCanal;
    }
}

const minhaTV = new Televisor();    
minhaTV.mudarCanal(25);
console.log(`Canal atual: ${minhaTV.canal}`);
minhaTV.aumentarVolume();
console.log(`Volume atual: ${minhaTV.volume}`);
minhaTV.diminuirVolume();
console.log(`Volume atual: ${minhaTV.volume}`);