Ընդհանուր նկարագիր
	IFC ձեւաչափի ինտեգրումը Մանի առարկայական պահոցում կատարուում է երկու փուլով․
		1. IFC-ի կաղապարի սահմանում Մանի առարկայական պահոցում:
    		2. Նիշի վերլուծման մշակում:


Միջերեսի նկարագիր

	IFC-ի ձեւաչափի սահմանումը Մանի առարկայական պահոցում  կատարուում է համապատասխան հրամանների միջոցով, որոնք գործարկուում են գործառնական համակարգի վահանակում։
		1. IFC կաղապարի ներկայացումը Մանի տուեալների կազմակերպման հարթակում կատարուում է նախագծի արմատում՝ աւգտագործելով run.py նիշը։ Գործառնական համակարգի վահանակի մէջ կատարուում է յետեւեալ հրահանգը՝
			./run.py schema file_path
, որտեղ "schema" բանալի բառով նշուում է, որ կատարուի գոյաբանութեան ստեղծում, իսկ "file_path" արգումենտով նշուում է կաղապար նիշի հասցեն, այնույետեւ կատարուում է թարգմանութեան գործընթացը, որի ելքային տուեալի գործարկման արդիւնքում կառուցուում է համապատասխան Մանի յաւելուածը։ Բուն թարգմանութիւնը կատարուում է մոտաւորապէս 3 րոպէ, իսկ յաւելուածի ստեղծումը՝ 5-6 րոպէ։

		2. IFC նիշի պարունակութեան աւելացումը Մանի նիստում կատարուում է նախագծի արմատում՝ աւգտագործելով run.py նիշը։ Գործառնական համակարգի վահանակի մէջ կատարուում է յետեւեալ հրահանգը՝
		./run.py parser file_path
, որտեղ "parser" բանալի բառով նշուում է, որ կատարուի տիպերի առարկայների ստեղծում, իսկ "file_path" արգումենտով նշուում է IFC նիշի հասցեն: Այնույետեւ կատարուում է նիշի տուեալների մշակում, տիպերի առարկայների ստեղծում եւ աւելացումը նիստ։   


Ներքին ճարտարապետութիւն

Լուծման ներքին ճարտարապետութիւնը ներառում է տուեալների, կարգաւորումների, հրահանգաշարային նիշերի եւ ստուգիչների կառավարման տարբեր բաղադրիչներ: 
Նախագծի արմատը պարունակում է յետեւեալ նիշերը եւ թղթապանակները․
    • run.py նիշը պարունակում է հրամաններ ծրագիրը աշխատացնելու, փորձարկումների կատարման եւ կախուածութիւնները կառավարելու համար, ինչը թոյղ է տալիս պարզեցնել ծրագրի կառուցման ընթացքը:

    • README․ նիշը ծրագրի հիմնական փաստաթուղթն է: Այն պարունակում է ակնարկ, գործիքակազմի տեղադրման հրահանգներ, աւգտագործման ուղեցոյց եւ այղ անհրաժեշտ տեղեկութիւններ:

    • /data պարունակում է  անհրաժեշտ տուեալները, որոնք պէտք են ծրագրի կառուցման համար։
        ◦ /schemas  պարունակում է IFC կաղապների նիշեր,
        ◦ /meta պարունակում է Ինստիգեյթական Meta II թարգմանիչը` JavaScript լեզուով գրուած,
        ◦ /metax պարունակում է բոլոր այն նիշերը, որոնք անհրաժեշտ են  Metax համակարգին կպնելու համար՝ կատարելու տուեալների ստեղծում, պահպանում եւ թարմացում։ 

    • /src պարունակում է ծրագրի հիմնական հրահանգաշարը՝ բաժանուած ենթաբաժիների։
        ◦ /translation:  կատարում է EXPRESS ձեւաչափի կառոյցների թարգմանութիւն Մանի տիպերի՝ աւգտագործելով Meta II թարգմանիչը։
        ◦ /schema_creator։ կառավարում է Մանի յաւելուածի ստեղծման գործողութիւնները եւ տիպերի ստեղծումը Metax համակարգում:
        ◦ /file_parser: պատասխանատու է IFC նիշերի վերլուծման գործողութիւնների համար:

    • /test թղթապանակը պարունակում է /src֊ի ենթաբաժիների ֆունկցիոնալութեան ստուգիչներ։

    • /schema_uuids  թղթապանակը պարունակում է գեներացուած Մանի տիպերի uuid-ները նշուած կաղապարի տարբերակից, որոնք անհրաժեշտ են տուեալ կաղապարով ստեղծուած IFC նիշը վերլուծման համար՝ Մանի տիպերից նիստ եւ առարկայներ ստեղծելու համար։

    • /file_data  թղթապանակը պարունակում է ներմուծուած IFC նիշի տուեալները Json ձեւաչափով։

    • /examples  թղթապանակը պարունակում է IFC նիշեր
