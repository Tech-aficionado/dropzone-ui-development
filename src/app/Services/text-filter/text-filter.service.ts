import { Injectable } from '@angular/core';
import { Filter } from 'bad-words';
@Injectable({
  providedIn: 'root',
})
export class TextFilterService {
  private filter = new Filter();

  constructor() {
    this.filter.addWords(
      'fuck',
      'shit',
      'ass',
      'bitch',
      'damn',
      'cunt',
      'dick',
      'cock',
      'pussy',
      'bastard',
      'whore',
      'slut',
      'asshole',
      'porn',
      'pornography',
      'nude',
      'nudity',
      'naked',
      'sex',
      'orgasm',
      'masturbate',
      'erotic',
      'hentai',
      'bondage',
      'bdsm',
      'fetish',
      'kinky',
      'blood',
      'gore',
      'mutilation',
      'dismember',
      'decapitate',
      'torture',
      'murder',
      'kill',
      'slaughter',
      'massacre',
      'suicide',
      'rape',
      'nigger',
      'faggot',
      'retard',
      'spic',
      'kike',
      'chink',
      'wetback',
      'nazi',
      'holocaust',
      'racist',
      'sexist',
      'homophobe',
      'transphobe',
      'cocaine',
      'heroin',
      'meth',
      'marijuana',
      'drug',
      'narcotic',
      'overdose',
      'addiction',
      'illegal',
      'penis',
      'vagina',
      'anus',
      'testicles',
      'clitoris',
      'nipples',
      'breasts',
      'deepfake',
      'nonconsensual',
      'revenge porn',
      'child exploitation',
      'bestiality',
      'terrorism',
      'extremism',
      'jihad',
      'radical',
      'propaganda',
      'conspiracy',
    );
  }

  checkProfanity(text: string): boolean {
    return this.filter.isProfane(text);
  }

  censorText(text: string): string {
    return this.filter.clean(text);
  }
}
