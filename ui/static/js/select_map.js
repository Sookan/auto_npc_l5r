const families_options = new Map();
const Schools_options = new Map();
const Schools_bonus_trait = new Map();
const families_bonus_trait = new Map();


families_options.set("crab",
    "<option value='' selected='selected' id='default_family'> -- Choose a family --</option>"+
    "<option value='The Hida Family'> The Hida Family</option>"+
    "<option value='The Hiruma Family'> The Hiruma Family</option>"+
    "<option value='The Kaiu Family'> The Kaiu Family</option>"+
    "<option value='The Kuni Family'> The Kuni Family</option>"+
    "<option value='The Toritaka Family'> The Toritaka Family</option>"+
    "<option value='The Yasuki Family'> The Yasuki Family</option>"+
    "<option value='Kakeguchi (Hida)'> Kakeguchi (Hida)</option>"+
    "<option value='Moshibaru (Hida)'> Moshibaru (Hida)</option>"+
    "<option value='Endo (Hiruma)'> Endo (Hiruma)</option>"+
    "<option value='Raikuto (Hiruma/Yasuki)'> Raikuto (Hiruma/Yasuki)</option>"+
    "<option value='Fundai (Kaiu)'> Fundai (Kaiu)</option>"+
    "<option value='Maisuna (Kaiu)'> Maisuna (Kaiu)</option>"+
    "<option value='Meishozo (Kuni)'> Meishozo (Kuni)</option>"+
    "<option value='Ugawari (Kuni)'> Ugawari (Kuni)</option>"+
    "<option value='Kano (Yasuki)'> Kano (Yasuki)</option>"+
    "<option value='Nobuto (Yasuki)'> Nobuto (Yasuki)</option>"
);

families_options.set("crane",
    "<option value='' selected='selected' id='default_family'> -- Choose a family --</option>"+
    "<option value='The Asahina Family'> The Asahina Family</option>"+
    "<option value='The Daidoji Family'> The Daidoji Family</option>"+
    "<option value='The Doji Family'> The Doji Family</option>"+
    "<option value='The Kakita Family'> The Kakita Family</option>"+
    "<option value='Hiramichi (Daidoji)'> Hiramichi (Daidoji)</option>"+
    "<option value='Hiramori (Daidoji)'> Hiramori (Daidoji)</option>"+
    "<option value='Katogama (Doji)'> Katogama (Doji)</option>"+
    "<option value='Tsume (Doji)'> Tsume (Doji)</option>"+
    "<option value='Ashidaka (Kakita)'> Ashidaka (Kakita)</option>"+
    "<option value='Iwasaki (Kakita)'> Iwasaki (Kakita)</option>"
);


families_options.set("dragon",
    "<option value='' selected='selected' id='default_family'> -- Choose a family --</option>"+
    "<option value='The Kitsuki Family'> The Kitsuki Family</option>"+
    "<option value='The Mirumoto Family'> The Mirumoto Family</option>"+
    "<option value='The Tamori Family'> The Tamori Family</option>"+
    "<option value='The Togashi Order'> The Togashi Order</option>"+
    "<option value='The Agasha Family'> The Agasha Family</option>"+
    "<option value='Sakura (Kitsuki)'> Sakura (Kitsuki)</option>"+
    "<option value='Kouken (Mirumoto)'> Kouken (Mirumoto)</option>"+
    "<option value='Zurui (Mirumoto)'> Zurui (Mirumoto)</option>"+
    "<option value='Chiyu (Tamori)'> Chiyu (Tamori)</option>"+
    "<option value='Hiasobi (Tamori)'> Hiasobi (Tamori)</option>"+
    "<option value='Izaku (Agasha/Tamori)'> Izaku (Agasha/Tamori)</option>"
);

families_options.set("lion",
    "<option value='' selected='selected' id='default_family'> -- Choose a family --</option>"+
    "<option value='The Akodo Family'> The Akodo Family</option>"+
    "<option value='The Ikoma Family'> The Ikoma Family</option>"+
    "<option value='The Kitsu Family'> The Kitsu Family</option>"+
    "<option value='The Matsu Family'> The Matsu Family</option>"+
    "<option value='Katai (Akodo)'> Katai (Akodo)</option>"+
    "<option value='Seizuka (Akodo)'> Seizuka (Akodo)</option>"+
    "<option value='Hosokawa (Ikoma)'> Hosokawa (Ikoma)</option>"+
    "<option value='Kaeru (Ikoma)'> Kaeru (Ikoma)</option>"+
    "<option value='Murame (Ikoma)'> Murame (Ikoma)</option>"+
    "<option value='Ise (Kitsu)'> Ise (Kitsu)</option>"+
    "<option value='Noroko (Kitsu)'> Noroko (Kitsu)</option>"+
    "<option value='Ikeda (Matsu)'> Ikeda (Matsu)</option>"+
    "<option value='Koritome (Matsu)'> Koritome (Matsu)</option>"
);

families_options.set("mantis",
    "<option value='' selected='selected' id='default_family'> -- Choose a family --</option>"+
    "<option value='The Kitsune Family'> The Kitsune Family</option>"+
    "<option value='The Moshi Family'> The Moshi Family</option>"+
    "<option value='The Tsuruchi Family'> The Tsuruchi Family</option>"+
    "<option value='The Yoritomo Family'> The Yoritomo Family</option>"+
    "<option value='Byako (Kitsune)'> Byako (Kitsune)</option>"+
    "<option value='Shudo (Kitsune)'> Shudo (Kitsune)</option>"+
    "<option value='Goraiku (Moshi)'> Goraiku (Moshi)</option>"+
    "<option value='Kagehisa (Tsuruchi)'> Kagehisa (Tsuruchi)</option>"+
    "<option value='Suguru (Tsuruchi)'> Suguru (Tsuruchi)</option>"+
    "<option value='Hogosha (Yoritomo)'> Hogosha (Yoritomo)</option>"+
    "<option value='Watanabe (Yoritomo)'> Watanabe (Yoritomo)</option>"
);
families_options.set("phoenix",
    "<option value='' selected='selected' id='default_family'> -- Choose a family --</option>"+
    "<option value='The Agasha Family'> The Agasha Family</option>"+
    "<option value='The Asako Family'> The Asako Family</option>"+
    "<option value='The Isawa Family'> The Isawa Family</option>"+
    "<option value='The Shiba Family'> The Shiba Family</option>"+
    "<option value='Atsumaru (Agasha)'> Atsumaru (Agasha)</option>"+
    "<option value='Izaku (Agasha)'> Izaku (Agasha)</option>"+
    "<option value='Chukan (Asako)'> Chukan (Asako)</option>"+
    "<option value='Nani (Asako)'> Nani (Asako)</option>"+
    "<option value='Shingon (Isawa)'> Shingon (Isawa)</option>"+
    "<option value='Nasu (Shiba)'> Nasu (Shiba)</option>"+
    "<option value='Sesai (Shiba)'> Sesai (Shiba)</option>"+
    "<option value='Sodona (Shiba)'> Sodona (Shiba)</option>"
);

families_options.set("scorpion",
    "<option value='' selected='selected' id='default_family'> -- Choose a family --</option>"+
    "<option value='The Bayushi Family'> The Bayushi Family</option>"+
    "<option value='The Shosuro Family'> The Shosuro Family</option>"+
    "<option value='The Soshi Family'> The Soshi Family</option>"+
    "<option value='The Yogo Family'> The Yogo Family</option>"+
    "<option value='Aotora (Bayushi)'> Aotora (Bayushi)</option>"+
    "<option value='Rokugo (Bayushi)'> Rokugo (Bayushi)</option>"+
    "<option value='Kochako (Shosuro )'> Kochako (Shosuro )</option>"+
    "<option value='Tokagure (Shosuro)'> Tokagure (Shosuro)</option>"+
    "<option value='Nanbu (Soshi)'> Nanbu (Soshi)</option>"+
    "<option value='Naganori (Yogo)'> Naganori (Yogo)</option>"+
    "<option value='Tansaku (Yogo)'> Tansaku (Yogo)</option>"

);

families_options.set("unicorn",
    "<option value='' selected='selected' id='default_family'> -- Choose a family --</option>"+
    "<option value='The Horiuchi Family'> The Horiuchi Family</option>"+
    "<option value='The Ide Family'> The Ide Family</option>"+
    "<option value='The Iuchi Family'> The Iuchi Family</option>"+
    "<option value='The Moto Family'> The Moto Family</option>"+
    "<option value='The Shinjo Family'> The Shinjo Family</option>"+
    "<option value='The Utaku Family'> The Utaku Family</option>"+
    "<option value='Hateru (Ide)'> Hateru (Ide)</option>"+
    "<option value='Suio (Ide)'> Suio (Ide)</option>"+
    "<option value='Battue (Iuchi)'> Battue (Iuchi)</option>"+
    "<option value='Kenshin (Iuchi)'> Kenshin (Iuchi)</option>"+
    "<option value='Onshigawa (Moto)'> Onshigawa (Moto)</option>"+
    "<option value='Marta (Shinjo)'> Marta (Shinjo)</option>"+
    "<option value='Hyuga (Utaku)'> Hyuga (Utaku)</option>"+
    "<option value='Naoko (Utaku)'> Naoko (Utaku)</option>"
);

Schools_options.set("crab",
    "<option value='' selected='selected' id='default_school'> -- Choose a school --</option>"+
    "<option value='Hida Bushi [CR]'> Hida Bushi [CR]</option>"+
    "<option value='Hida Pragmatist [Bushi] [EE]'> Hida Pragmatist [Bushi] [EE]</option>"+
    "<option value='Hiruma Bushi [CR]'> Hiruma Bushi [CR]</option>"+
    "<option value='Hiruma Scout [Bushi] [IH]'> Hiruma Scout [Bushi] [IH]</option>"+
    "<option value='Kaiu Engineer [Artisan/Bushi] [GC]'> Kaiu Engineer [Artisan/Bushi] [GC]</option>"+
    "<option value='Kuni Shugenja [CR]'> Kuni Shugenja [CR]</option>"+
    "<option value='Kuni Witch-Hunter [Monk] [GC]'> Kuni Witch-Hunter [Monk] [GC]</option>"+
    "<option value='Toritaka Bushi [CR]'> Toritaka Bushi [CR]</option>"+
    "<option value='Yasuki Courtier [CR]'> Yasuki Courtier [CR]</option>"
);
Schools_options.set("crane",
    "<option value='' selected='selected' id='default_school'> -- Choose a school --</option>"+
    "<option value='Asahina Shugenja [CR]'> Asahina Shugenja [CR]</option>"+
    "<option value='Daidoji Iron Warrior [Bushi] [CR]'> Daidoji Iron Warrior [Bushi] [CR]</option>"+
    "<option value='Daidoji Scout [Bushi]'> Daidoji Scout [Bushi]</option>"+
    "<option value='Doji Courtier [CR]'> Doji Courtier [CR]</option>"+
    "<option value='Doji Magistrate [Bushi] [EE]'> Doji Magistrate [Bushi] [EE]</option>"+
    "<option value='Kakita Bushi [CR]'> Kakita Bushi [CR]</option>"+
    "<option value='Kakita Artisan'> Kakita Artisan</option>"
);
Schools_options.set("dragon",
    "<option value='' selected='selected' id='default_school'> -- Choose a school --</option>"+
    "<option value='Kitsuki Investigator [Courtier] [CR]'> Kitsuki Investigator [Courtier] [CR]</option>"+
    "<option value='Mirumoto Bushi [CR]'> Mirumoto Bushi [CR]</option>"+
    "<option value='Mirumoto Taoist Swordsman [Bushi] [EE]'> Mirumoto Taoist Swordsman [Bushi] [EE]</option>"+
    "<option value='Tamori Shugenja [CR]'> Tamori Shugenja [CR]</option>"+
    "<option value='The Togashi Tattooed Order [Monk] [CR]'> The Togashi Tattooed Order [Monk] [CR]</option>"+
    "<option value='The Hoshi Tsurui Zumi Order [Monk] [IH]'> The Hoshi Tsurui Zumi Order [Monk] [IH]</option>"+
    "<option value='The Hitomi Kikage Zumi Order [Monk] [IH]'> The Hitomi Kikage Zumi Order [Monk] [IH]</option>"
);
Schools_options.set("lion",
    "<option value='' selected='selected' id='default_school'> -- Choose a school --</option>"+
    "<option value='Akodo Bushi [CR]'> Akodo Bushi [CR]</option>"+
    "<option value='Ikoma Bard [Courtier] [CR]'> Ikoma Bard [Courtier] [CR]</option>"+
    "<option value='Ikoma Lion’s Shadow [Bushi] [EE]'> Ikoma Lion’s Shadow [Bushi] [EE]</option>"+
    "<option value='Kitsu Shugenja [CR]'> Kitsu Shugenja [CR]</option>"+
    "<option value='Lion Elite Spearmen [Bushi] [NP]'> Lion Elite Spearmen [Bushi] [NP]</option>"+
    "<option value='Matsu Beastmaster [Bushi]'> Matsu Beastmaster [Bushi]</option>"+
    "<option value='Matsu Berserker [Bushi] [CR]'> Matsu Berserker [Bushi] [CR]</option>"
);
Schools_options.set("mantis",
    "<option value='' selected='selected' id='default_school'> -- Choose a school --</option>"+
    "<option value='Kitsune Shugenja [CR]'> Kitsune Shugenja [CR]</option>"+
    "<option value='Mantis Brawler [Bushi]'> Mantis Brawler [Bushi]</option>"+
    "<option value='Moshi Shugenja [CR]'> Moshi Shugenja [CR]</option>"+
    "<option value='Tsuruchi Archer [Bushi] [CR]'> Tsuruchi Archer [Bushi] [CR]</option>"+
    "<option value='Tsuruchi Bounty Hunter [Bushi]'> Tsuruchi Bounty Hunter [Bushi]</option>"+
    "<option value='Yoritomo Bushi [CR]'> Yoritomo Bushi [CR]</option>"+
    "<option value='Yoritomo Courtier [CR]'> Yoritomo Courtier [CR]</option>"+
    "<option value='Yoritomo Shugenja'> Yoritomo Shugenja</option>"
);
Schools_options.set("phoenix",
    "<option value='' selected='selected' id='default_school'> -- Choose a school --</option>"+
    "<option value='Agasha Shugenja [CR]'> Agasha Shugenja [CR]</option>"+
    "<option value='Asako Henshin [Monk]'> Asako Henshin [Monk]</option>"+
    "<option value='Asako Loremaster [Courtier] [CR]'> Asako Loremaster [Courtier] [CR]</option>"+
    "<option value='Isawa Shugenja [CR]'> Isawa Shugenja [CR]</option>"+
    "<option value='Shiba Artisan [Courtier] [EE]'> Shiba Artisan [Courtier] [EE]</option>"+
    "<option value='Shiba Bushi [CR]'> Shiba Bushi [CR]</option>"
);
Schools_options.set("scorpion",
    "<option value='' selected='selected' id='default_school'> -- Choose a school --</option>"+
    "<option value='Bayushi Bushi [CR]'> Bayushi Bushi [CR]</option>"+
    "<option value='Bayushi Courtier [CR]'> Bayushi Courtier [CR]</option>"+
    "<option value='Shosuro Actor [Ninja]'> Shosuro Actor [Ninja]</option>"+
    "<option value='Shosuro Infiltrator [Ninja] [CR]'> Shosuro Infiltrator [Ninja] [CR]</option>"+
    "<option value='Soshi Magistrate [Bushi] [EE]'> Soshi Magistrate [Bushi] [EE]</option>"+
    "<option value='Soshi Shugenja [CR]'> Soshi Shugenja [CR]</option>"+
    "<option value='Yogo Wardmaster [Shugenja]'> Yogo Wardmaster [Shugenja]</option>"
);
Schools_options.set("unicorn",
    "<option value='' selected='selected' id='default_school'> -- Choose a school --</option>"+
    "<option value='Horiuchi Shugenja'> Horiuchi Shugenja</option>"+
    "<option value='Ide Emissary [Courtier] [CR]'> Ide Emissary [Courtier] [CR]</option>"+
    "<option value='Iuchi Shugenja [CR]'> Iuchi Shugenja [CR]</option>"+
    "<option value='Moto Bushi [CR]'> Moto Bushi [CR]</option>"+
    "<option value='Moto Death Priest [Shugenja] [IH]'> Moto Death Priest [Shugenja] [IH]</option>"+
    "<option value='Moto Vindicator [Bushi]'> Moto Vindicator [Bushi]</option>"+
    "<option value='Shinjo Bushi [EE]'> Shinjo Bushi [EE]</option>"+
    "<option value='Utaku Battle Maiden [Bushi] [CR]'> Utaku Battle Maiden [Bushi] [CR]</option>"+
    "<option value='Utaku Mounted Infantry [Bushi]'> Utaku Mounted Infantry [Bushi]</option>"
);

families_bonus_trait.set("The Horiuchi Family","Willpower");
families_bonus_trait.set("unicorn","Willpower");
families_bonus_trait.set("The Ide Family","Perception");
families_bonus_trait.set("The Iuchi Family","Intelligence");
families_bonus_trait.set("The Moto Family","Agility");
families_bonus_trait.set("The Shinjo Family","Reflexes");
families_bonus_trait.set("The Utaku Family","Stamina");
families_bonus_trait.set("Hateru (Ide)","Intelligence");
families_bonus_trait.set("Suio (Ide)","Intelligence");
families_bonus_trait.set("Battue (Iuchi)","Willpower");
families_bonus_trait.set("Kenshin (Iuchi)","Perception");
families_bonus_trait.set("Onshigawa (Moto)","Stamina");
families_bonus_trait.set("Marta (Shinjo)","Awareness");
families_bonus_trait.set("Hyuga (Utaku)","Awareness");
families_bonus_trait.set("Naoko (Utaku)","Perception");
families_bonus_trait.set("The Hida Family","Strength"); //base
families_bonus_trait.set("crab","Strength");
families_bonus_trait.set("The Hiruma Family","Agility");
families_bonus_trait.set("The Kaiu Family","Intelligence");
families_bonus_trait.set("The Kuni Family","Intelligence");
families_bonus_trait.set("The Toritaka Family","Perception");
families_bonus_trait.set("The Yasuki Family","Awareness");
families_bonus_trait.set("Kakeguchi (Hida)","Agility");
families_bonus_trait.set("Moshibaru (Hida)","any");
families_bonus_trait.set("Endo (Hiruma)","Intelligence");
families_bonus_trait.set("Raikuto (Hiruma/Yasuki)","Intelligence");
families_bonus_trait.set("Fundai (Kaiu)","Intelligence");
families_bonus_trait.set("Maisuna (Kaiu)","Strength");
families_bonus_trait.set("Meishozo (Kuni)","Willpower");
families_bonus_trait.set("Ugawari (Kuni)","Strength");
families_bonus_trait.set("Kano (Yasuki)","Awareness");
families_bonus_trait.set("Nobuto (Yasuki)","Strength");
families_bonus_trait.set("The Asahina Family","Intelligence");
families_bonus_trait.set("crane","Intelligence");
families_bonus_trait.set("The Daidoji Family","Stamina");
families_bonus_trait.set("The Doji Family","Awareness");
families_bonus_trait.set("The Kakita Family","Agility");
families_bonus_trait.set("Hiramichi (Daidoji)","Awareness");
families_bonus_trait.set("Hiramori (Daidoji)","Perception");
families_bonus_trait.set("Katogama (Doji)","Perception");
families_bonus_trait.set("Tsume (Doji)","Agility");
families_bonus_trait.set("Ashidaka (Kakita)","Agility");
families_bonus_trait.set("Iwasaki (Kakita)","Awareness");
families_bonus_trait.set("The Kitsuki Family","Awareness");
families_bonus_trait.set("dragon","Awareness");
families_bonus_trait.set("The Mirumoto Family","Agility");
families_bonus_trait.set("The Tamori Family","Willpower");
families_bonus_trait.set("The Togashi Order","Reflexes");
families_bonus_trait.set("The Agasha Family","Perception");
families_bonus_trait.set("phoenix","Perception");
families_bonus_trait.set("Sakura (Kitsuki)","Willpower");
families_bonus_trait.set("Kouken (Mirumoto)","Perception");
families_bonus_trait.set("Zurui (Mirumoto)","Intelligence");
families_bonus_trait.set("Chiyu (Tamori)","Perception");
families_bonus_trait.set("Hiasobi (Tamori)","Intelligence");
families_bonus_trait.set("Izaku (Agasha/Tamori)","Intelligence");
families_bonus_trait.set("The Akodo Family","Agility");
families_bonus_trait.set("lion","Agility");
families_bonus_trait.set("The Ikoma Family","Awareness");
families_bonus_trait.set("The Kitsu Family","Intelligence");
families_bonus_trait.set("The Matsu Family","Strength");
families_bonus_trait.set("Katai (Akodo)","Agility");
families_bonus_trait.set("Seizuka (Akodo)","Awareness");
families_bonus_trait.set("Hosokawa (Ikoma)","Intelligence");
families_bonus_trait.set("Kaeru (Ikoma)","Awareness");
families_bonus_trait.set("Murame (Ikoma)","Perception");
families_bonus_trait.set("Ise (Kitsu)","Strength");
families_bonus_trait.set("Noroko (Kitsu)","Willpower");
families_bonus_trait.set("Ikeda (Matsu)","Agility");
families_bonus_trait.set("Koritome (Matsu)","Reflexes");
families_bonus_trait.set("The Kitsune Family","Awareness");
families_bonus_trait.set("mantis","Awareness");
families_bonus_trait.set("The Moshi Family","Intelligence");
families_bonus_trait.set("The Tsuruchi Family","Perception");
families_bonus_trait.set("The Yoritomo Family","Stamina");
families_bonus_trait.set("Byako (Kitsune)","Willpower");
families_bonus_trait.set("Shudo (Kitsune)","Perception");
families_bonus_trait.set("Goraiku (Moshi)","Reflexes");
families_bonus_trait.set("Kagehisa (Tsuruchi)","Awareness");
families_bonus_trait.set("Suguru (Tsuruchi)","Perception");
families_bonus_trait.set("Hogosha (Yoritomo)","Willpower");
families_bonus_trait.set("Watanabe (Yoritomo)","Perception");
families_bonus_trait.set("The Agasha Family","Perception");
families_bonus_trait.set("The Asako Family","Awareness");
families_bonus_trait.set("The Isawa Family","Willpower");
families_bonus_trait.set("The Shiba Family","Perception");
families_bonus_trait.set("Atsumaru (Agasha)","Perception");
families_bonus_trait.set("Izaku (Agasha)","Intelligence");
families_bonus_trait.set("Chukan (Asako)","Intelligence");
families_bonus_trait.set("Nani (Asako)","Perception");
families_bonus_trait.set("Shingon (Isawa)","Intelligence");
families_bonus_trait.set("Nasu (Shiba)","Intelligence");
families_bonus_trait.set("Sesai (Shiba)","Agility");
families_bonus_trait.set("Sodona (Shiba)","Perception");
families_bonus_trait.set("The Bayushi Family","Agility");
families_bonus_trait.set("scorpion","Agility");
families_bonus_trait.set("The Shosuro Family","Awareness");
families_bonus_trait.set("The Soshi Family","Intelligence");
families_bonus_trait.set("The Yogo Family","Willpower");
families_bonus_trait.set("Aotora (Bayushi)","Intelligence");
families_bonus_trait.set("Rokugo (Bayushi)","Strength");
families_bonus_trait.set("Kochako (Shosuro )","Agility");
families_bonus_trait.set("Tokagure (Shosuro)","Intelligence");
families_bonus_trait.set("Nanbu (Soshi)","Perception");
families_bonus_trait.set("Naganori (Yogo)","Perception");
families_bonus_trait.set("Tansaku (Yogo)","Intelligence");
families_bonus_trait.set("","none");

Schools_bonus_trait.set("Hida Bushi [CR]","Stamina");
Schools_bonus_trait.set("crab","Stamina");
Schools_bonus_trait.set("Hida Pragmatist [Bushi] [EE]","Agility");
Schools_bonus_trait.set("Hiruma Bushi [CR]","Willpower");
Schools_bonus_trait.set("Hiruma Scout [Bushi] [IH]","Reflexes");
Schools_bonus_trait.set("Kaiu Engineer [Artisan/Bushi] [GC]","Intelligence");
Schools_bonus_trait.set("Kuni Shugenja [CR]","Willpower");
Schools_bonus_trait.set("Kuni Witch-Hunter [Monk] [GC]","Willpower");
Schools_bonus_trait.set("Toritaka Bushi [CR]","Strength");
Schools_bonus_trait.set("Yasuki Courtier [CR]","Perception");
Schools_bonus_trait.set("Asahina Shugenja [CR]","Awareness");
Schools_bonus_trait.set("crane","Awareness");
Schools_bonus_trait.set("Daidoji Iron Warrior [Bushi] [CR]","Agility");
Schools_bonus_trait.set("Daidoji Scout [Bushi]","Reflexes");
Schools_bonus_trait.set("Doji Courtier [CR]","Awareness");
Schools_bonus_trait.set("Doji Magistrate [Bushi] [EE]","Reflexes");
Schools_bonus_trait.set("Kakita Bushi [CR]","Reflexes");
Schools_bonus_trait.set("Kakita Artisan","Awareness");
Schools_bonus_trait.set("Kitsuki Investigator [Courtier] [CR]","Perception");
Schools_bonus_trait.set("dragon","Perception");
Schools_bonus_trait.set("Mirumoto Bushi [CR]","Stamina");
Schools_bonus_trait.set("Mirumoto Taoist Swordsman [Bushi] [EE]","Void");
Schools_bonus_trait.set("Tamori Shugenja [CR]","Stamina");
Schools_bonus_trait.set("The Togashi Tattooed Order [Monk] [CR]","Void");
Schools_bonus_trait.set("The Hoshi Tsurui Zumi Order [Monk] [IH]","Void");
Schools_bonus_trait.set("The Hitomi Kikage Zumi Order [Monk] [IH]","None");
Schools_bonus_trait.set("Akodo Bushi [CR]","Perception");
Schools_bonus_trait.set("lion","Perception");
Schools_bonus_trait.set("Ikoma Bard [Courtier] [CR]","Intelligence");
Schools_bonus_trait.set("Ikoma Lion’s Shadow [Bushi] [EE]","Awareness");
Schools_bonus_trait.set("Kitsu Shugenja [CR]","Perception");
Schools_bonus_trait.set("Lion Elite Spearmen [Bushi] [NP]","Reflexes");
Schools_bonus_trait.set("Matsu Beastmaster [Bushi]","Agility");
Schools_bonus_trait.set("Matsu Berserker [Bushi] [CR]","Strength");
Schools_bonus_trait.set("Kitsune Shugenja [CR]","Stamina");
Schools_bonus_trait.set("mantis","Stamina");
Schools_bonus_trait.set("Mantis Brawler [Bushi]","None");
Schools_bonus_trait.set("Moshi Shugenja [CR]","Awareness");
Schools_bonus_trait.set("Tsuruchi Archer [Bushi] [CR]","Reflexes");
Schools_bonus_trait.set("Tsuruchi Bounty Hunter [Bushi]","Agility");
Schools_bonus_trait.set("Yoritomo Bushi [CR]","None");
Schools_bonus_trait.set("Yoritomo Courtier [CR]","Willpower");
Schools_bonus_trait.set("Yoritomo Shugenja","Perception");
Schools_bonus_trait.set("Agasha Shugenja [CR]","Intelligence");
Schools_bonus_trait.set("phoenix","Intelligence");
Schools_bonus_trait.set("Asako Henshin [Monk]","Willpower");
Schools_bonus_trait.set("Asako Loremaster [Courtier] [CR]","Intelligence");
Schools_bonus_trait.set("Isawa Shugenja [CR]","Intelligence");
Schools_bonus_trait.set("Shiba Artisan [Courtier] [EE]","Intelligence");
Schools_bonus_trait.set("Shiba Bushi [CR]","Agility");
Schools_bonus_trait.set("Bayushi Bushi [CR]","Intelligence");
Schools_bonus_trait.set("scorpion","Intelligence");
Schools_bonus_trait.set("Bayushi Courtier [CR]","Awareness");
Schools_bonus_trait.set("Shosuro Actor [Ninja]","Awareness");
Schools_bonus_trait.set("Shosuro Infiltrator [Ninja] [CR]","Reflexes");
Schools_bonus_trait.set("Soshi Magistrate [Bushi] [EE]","Agility");
Schools_bonus_trait.set("Soshi Shugenja [CR]","Awareness");
Schools_bonus_trait.set("Yogo Wardmaster [Shugenja]","Intelligence");
Schools_bonus_trait.set("Horiuchi Shugenja","Stamina");
Schools_bonus_trait.set("unicorn","Stamina");
Schools_bonus_trait.set("Ide Emissary [Courtier] [CR]","Awareness");
Schools_bonus_trait.set("Iuchi Shugenja [CR]","Perception");
Schools_bonus_trait.set("Moto Bushi [CR]","Strength");
Schools_bonus_trait.set("Moto Death Priest [Shugenja] [IH]","Willpower");
Schools_bonus_trait.set("Moto Vindicator [Bushi]","Willpower");
Schools_bonus_trait.set("Shinjo Bushi [EE]","Agility");
Schools_bonus_trait.set("Utaku Battle Maiden [Bushi] [CR]","Reflexes");
Schools_bonus_trait.set("Utaku Mounted Infantry [Bushi]","Agility");
Schools_bonus_trait.set("","none");


html1_st = "<tr class='textcenter' id='";
html1_5 = "'> <td scope='row'>";
html2_st = "</td> <td> <input id='";
html3_st = "type='number' min='1' max='5' value='";
html4_st = "' class='school_rank' oninput='checkValue(this);'></td>";
html5_st = "<td> <input type='button' class='close_button' value='X' onclick=\"deleteRow(this,'other_schools_table');\"> </td> </tr>";


