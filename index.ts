import { Telegraf, Markup } from "telegraf";
import { BOT_TOKEN } from "./src/credentials";

const bot = new Telegraf(BOT_TOKEN);

const menuButtons = Markup.inlineKeyboard([
  [
    Markup.button.callback("Каталог", "catalog"),
    Markup.button.callback("Обменки", "exchange"),
  ],
  [
    Markup.button.callback("О нас", "about"),
    Markup.button.callback("Б/У", "used"),
  ],
]);

const backButton = Markup.inlineKeyboard([
  Markup.button.callback("Назад к меню", "back"),
]);

bot.start((ctx) => {
  const name = ctx.from?.first_name;
  ctx.reply(
    `Здравствуйте, ${name}. Добро пожаловать в Apple Park!`,
    menuButtons
  );
});

bot.action("catalog", (ctx) => {
  ctx.reply(
    `Обновленный прайс 
  на 11.07.2023
  
  🔌Аксессуары 🔌
  
  ✏️ Pencil 1gen - 130$
  ✏️ Pencil 2gen - 140$
  🖲 Homepod Mini Black/white - 135 $ 🔥
  ⚪️ AirTag (1 pack) - 50$
  ⚪️ AirTag (4 pack) - 155$
  🔋 MagSafe Battery Charger - 150$
  ⚪️ MagSafe - 65$ 
  🖱️ Magic Mouse 3 white - 125$
  🪧 Magic Trackpad - 205$
  📺  Apple TV HD 2021 32 MHY93  - 175$  
  
  —————————————————
  Кубик 1А Ориг -17$
  Кубик Baseus 20W Type-C - 17$
  Кубик 20w USB-C (ориг) - 33$
  Кабель Type-C Baseus - 14$
  Кабель Type-C (ориг) 
  б/у 9/10- 18$
  Кабель Type-C (ориг) - 30$
  Переходник lightning 3.5 -20$
  
  ———————————————
  🎧AirPods🎧
  
  AirPods 2 - 145$
  Airpods 3 - 210$
  AirPods Pro MagSafe - 235$
  AirPods Pro 2022 - 260$ 
  AirPods Max 🎧 - от 620$
  ———————————————
  SE 2022 64   - от 430$
  SE 2022 128 - от 540$
  11 64 - от 515$
  11 128  - от 580$ 
  12 mini 64 - от 550$
  12 mini 128 - от 595$
  12 mini 256 - от 630$
  
  ————————————————
  12 64 - от 670$
  12 64 White Актив - 605$
  12 128 - от 730$
  12 256 - от 735$
  —————————————————
  12 Pro 128 - от 830$
  12 Pro 256 - от 880$
  
  12 Pro Max 128 - от 890$
  —————————————————
  13 Mini 128 - 765$
  13 Mini 256 - от 865$
  
  13 128 - от 760$
  13 256 - от 900$
  13 512 - от 1010$
  
  13 Pro Max 128 - от 1170$
  ————————————————
  
  14 128 - от 840$ 🔥
  14 256 - от 960$ 
  
  14 Plus 128 - от 930$ 
  14 Plus 256 - от 1080$ 
  
  14 Pro 128 - от 1100$🔥
  14 Pro 256 - от 1205$
  
  14 Pro 512 - от 1460$
  
  14 Pro Max 128 - от 1200$
  14 Pro Max 256 - от 1300$
  14 Pro Max 512 - от 1585$
  14 Pro Max 1tb - от 1710$
  
  
  
  💻MacBook💻
  ------------------
  
  MacBook Air 13” M1/8/256Gb - от 975$
  
  MacBook Air 13” M1/8/512Gb - 1380$
  
  MacBook Pro 13”M1/8/512Gb - от 1440$
  
  
  MacBook Air 13” MLXW3
  M2/8/256Gb ⚫️⚪️ - от 1255$
  
  MacBook Pro 14”M1/16/512Gb (MKGP3)-1935$
  
  MacBook Air 13” MLXX3 M2/8/512Gb  - 1630$
  
  MacBook Pro 13” MNEP3 M2/8/256Gb  - 1400$
  
  MacBook Pro 13” MNEQ3 M2/8/512Gb  - 1675$
  
  MacBook Pro 13” MNEJ3 M2/8/512Gb  - 1675$ 
  
  
  MacBook Pro 14" M2 Pro 2023  512Gb Silver (MPHH3) - 2210$
  
  MacBook Pro 16" M2 Pro 2023  1024Gb Gray (MNW93) - 2910
  
  
  MacBook Pro 16” M1 Max/32/1TB 2021  MK1A3 - 3390$
  
  🧰 Mac Studio (M1 Max/10C/24C/32/512) MJMV3 - 2370$
      
  MacBook Pro 16 (M1 Pro/10C/16C/16/1TB) Silver MK1F3 - 2590$ 
  MacBook Pro 14 (M1 Pro/8C/14C/16/512) Space Gray актив. запак MKGP3 - 1850$ 
  MacBook Air 13.6 (M2/8C/10C/8/1TB) Space Gray Z15T0006U - 1750$`,
    backButton
  );
  ctx.answerCbQuery();
});

bot.action("exchange", (ctx) => {
  ctx.reply(`☘️ ОБМЕНКИ 11.07.2023

  Новая, оригинальная, не восстановленная техника, которая была заменена в рамках мировой гарантии Apple. 
  - Поставляются без комплекта и коробки, в заводской оригинальной пленке, не активированы ✌🏻
  
  i P h o n e 
  ------------------
  
  13 Pro Max 128 Green 03-08-2023  - 1000$🔥
  13 Pro 256 Gold, полн к-т, 11-11-2023 - 1075$
  
  12 mini 128gb 🔵 - 555$
  12 128 Red - 620$
  
  11 128 Black актив  23-01-2024  530$ 
  11 128 White актив  23-01-2024  530$
  11 128 Purple актив  21-03-2024  530$
  
  ⌚️A p p l e  W a t c h
  -----------------------
  
  7 45 Blue, полн. к-т  10-07-2023 - 375$  
  7 45 Midnight , полн. к-т, 29-07-2023 - 375$ 
  7 45 Starlight, полн. к-т 10-12-2023 -  400$ 
   
  7 41 Green, полн. к-т.  09-05-2023 - 340$ 
  7 41 Midnight MKMX3, полн. к-т.  07-06-2023  330$  
  
  M A C /  i P A D
  -----------------------
  iPad 7 32gb Wifi Gray гарантия 06.04.2024 - 270$
  
  iPad Pro 12.9 M1 512 Wi-Fi+Cellular Space Gray MHR83, к-т.    1255$
  iPad Pro 12.9 2020 1TB Wi-Fi Space Gray MXAX2, к-т.    880$
  
  MacBook Pro 16 (M1 Pro/10C/16C/16/512) Space Gray MK183, полн. к-т.  25-11-2023 - 1990$ 
  MacBook Pro 14 (M1 Pro/8C/14C/32/512) Silver Z15J00029, полн. к-т.    2130$
  
  ✍️ Pencil 2 - 120$ 
  ✍️ Pencil 1 - 115$  
  🐭🇪🇺 Magic Mouse 2 Space Gray MRME2 - 105$ 
  🐭🇪🇺 Magic Mouse 3 Silver MK2E3 - 100$
  
  🎧 Beats Solo3 Wireless Black, полн. к-т.  210$
  🎧 AirPods Pro with MagSafe MLWK3 195$
  🎧 AirPods 3 with Magsafe MME73 190$
  🎧 AirPods 2 MV7N2 135$
  🎧 AirPods 2 with Wireless Case A1938 MRXJ2 145$`);
  ctx.answerCbQuery();
});

bot.action("about", (ctx) => {
  ctx.reply("Информация о нас в целом)))", backButton);
  ctx.answerCbQuery();
});

bot.action("used", (ctx) => {
  ctx.reply(
    `♻️ Б/У ТЕХНИКА на 11.07.2023

  📄 Оригинал, без вскрытий и ремонтов. На все б/у девайсы даем гарантию 3мес и бессрочную скидку на обслуживание: 
  
  
  14 Pro Max 128 Space Black 9/10, акб 94%, полн. к-т - 1090$
  
  13 Pro Max 1Tb Graphite 9/10, акб 94%, полн. к-т. - 1150$
  13 Pro Max 512 Sierra Blue 9/10, акб 95% - 1090$
  13 Pro Max 128 Gold 8.5/10, акб 97%  - 900$
  13 Pro Max 128 Gold 8/10, акб 97% 14-07-2023 - 900$
  13 Pro Max 128 Graphite 8.5/10, акб 87% - 900$ 
  13 Pro Max 128 Silver 8.5/10, акб 94% - 930$
  13 Pro 512 Graphite 9/10, акб 98% - 1050$
  13 Pro 256 Gold 8.5/10, акб 98%, полн. к-т. 10-07-2023- 920$
  13 Pro 256 Sierra Blue 8/10, акб 95% - 870$
  13 Pro 128 Gold 8/10, акб 99% - 870$
  
  13 128 Pink 8/10, акб 99%  28-10-2023- 650$ 
  
  13 mini 128 Pink 10/10 1цикл 100% - 650$ 🔥
  13 mini 128 Pink 8/10, акб 95% - 585$
  
  12 64 Green 8.5/10 акб 100% гарантия 31.08.2023 - 545$
  
  12 mini 128 Black 7.5/10 акб 84% - 435$ 
  
  11 Pro Max 512 Graphite 9/10, акб 93% - 595$
  
  Apple Watch 2 38mm  Gold (новый акб) 8/10 - 90$
  
  Mac Mini M1/8/256 10/10 как новый - 540$ 
  
  iMac 21.5” 2013late 2.7ghz/i5/8/1tb 9.5/10 + ⌨️ - 310$ 
  
  ❗️ iMac 21.5 2019 4k i5/3ghz/32Gb ddr4/512 + 🖱️+ ⌨️ - 860$ 
  
  iPad mini 6 64 Wi-Fi Purple MK7R3 10/10, 1 цикл, к-т - 490$🔥
  
  Valve Steam Deck 256, полн. к-т.    640$
  
  Pixel 7 Pro 5G 12/256 Snow 9/10 - 715$
  
  Homepod white - 200$ 🔥
  
  Sony PlayStation 4 Pro 9/10 (последняя ревизия) + 2 геймпада - 290$ 
  
   
  Оплата за технику осуществляется наличными при получении.
  Доступная оплата в криптовалюте. 
  
  Не нашли нужную модель? 
  Пишите в директ - подберем под заказ) 
  
  👇🏻👇🏻👇🏻👇🏻👇🏻
  @Roman_zvlv
  +375(33)605-63-57`,
    backButton
  );
  ctx.answerCbQuery();
});

bot.action("back", (ctx) => {
  const name = ctx.from?.first_name;
  ctx.reply(
    `Здравствуйте, ${name}. Добро пожаловать в Apple Park!`,
    menuButtons
  );
  ctx.answerCbQuery();
});

bot.launch();
console.log("Launch is successfully");
