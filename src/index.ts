import { HeroFactory } from "./factories/herofactory";
import { BattleService } from "./services/battleservice";

const heroes = HeroFactory.createRandomHeroes(4);
BattleService.tournament(heroes);