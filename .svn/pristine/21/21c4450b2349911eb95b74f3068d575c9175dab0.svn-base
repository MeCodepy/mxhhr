
/* *
 * ---------------------------------------- *
 * 城市选择组件 v1.0
 * Author: VVG
 * QQ: 83816819
 * Mail: mysheller@163.com
 * http://www.cnblogs.com/NNUF/
 * ---------------------------------------- *
 * Date: 2012-07-10
 * ---------------------------------------- *
 * Downloads By 
 
 
 * */

/* *
 * 全局空间 Vcity
 * */
var IVcity = {};
/* *
 * 静态方法集
 * @name _m
 * */
IVcity._m = {
    /* 选择元素 */
    $:function (arg, context) {
        var tagAll, n, eles = [], i, sub = arg.substring(1);
        context = context || document;
        if (typeof arg == 'string') {
            switch (arg.charAt(0)) {
                case '#':
                    return document.getElementById(sub);
                    break;
                case '.':
                    if (context.getElementsByClassName) return context.getElementsByClassName(sub);
                    tagAll = IVcity._m.$('*', context);
                    n = tagAll.length;
                    for (i = 0; i < n; i++) {
                        if (tagAll[i].className.indexOf(sub) > -1) eles.push(tagAll[i]);
                    }
                    return eles;
                    break;
                default:
                    return context.getElementsByTagName(arg);
                    break;
            }
        }
    },

    /* 绑定事件 */
    on:function (node, type, handler) {
        node.addEventListener ? node.addEventListener(type, handler, false) : node.attachEvent('on' + type, handler);
    },

    /* 获取事件 */
    getEvent:function(event){
        return event || window.event;
    },

    /* 获取事件目标 */
    getTarget:function(event){
        return event.target || event.srcElement;
    },

    /* 获取元素位置 */
    getPos:function (node) {
        var scrollx = document.documentElement.scrollLeft || document.body.scrollLeft,
            scrollt = document.documentElement.scrollTop || document.body.scrollTop;
        var pos = node.getBoundingClientRect();
        return {top:pos.top + scrollt, right:pos.right + scrollx, bottom:pos.bottom + scrollt, left:pos.left + scrollx }
    },

    /* 添加样式名 */
    addClass:function (c, node) {
        if(!node)return;
        node.className = IVcity._m.hasClass(c,node) ? node.className : node.className + ' ' + c ;
    },

    /* 移除样式名 */
    removeClass:function (c, node) {
        var reg = new RegExp("(^|\\s+)" + c + "(\\s+|$)", "g");
        if(!IVcity._m.hasClass(c,node))return;
        node.className = reg.test(node.className) ? node.className.replace(reg, '') : node.className;
    },

    /* 是否含有CLASS */
    hasClass:function (c, node) {
        if(!node || !node.className)return false;
        return node.className.indexOf(c)>-1;
    },

    /* 阻止冒泡 */
    stopPropagation:function (event) {
        event = event || window.event;
        event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
    },
    /* 去除两端空格 */
    trim:function (str) {
        return str.replace(/^\s+|\s+$/g,'');
    }
};

/* 所有城市数据,可以按照格式自行添加(北京|beijing|bj)，前12条为热门城市 */
IVcity.allCity = [
 '香港|HONG KONG|xianggang|b|HKG','新加坡|SINGAPORE|xinjiapo|b|SIN','首尔|SEOUL|shouer|b|SEL','曼谷|BANGKOK|mangu|b|BKK','东京|TOKYO|dongjing|b|TYO','台北|TAIPEI|taibei|b|TPE','吉隆坡|KUALA LUMPUR|jilongpo|b|KUL','悉尼|SYDNEY|xini|b|SYD','纽约|New York|niuyue|b|NYC','澳门|MACAU|aomen|b|MFM','伦敦|LONDON|lundun|b|LON','巴黎|PARIS|bali|b|PAR','洛杉矶|LOS ANGELES|luoshanji|b|LAX','马尼拉|Manila|manila|b|MNL','墨尔本(澳大利亚)|MELBOURNE(AU)|moerben(aodaliya)|b|MEL','大阪|OSAKA|daban|b|OSA','胡志明市|HOCHI MINH CITY|huzhimingshi|b|SGN','普吉|PHUKET|puji|b|HKT','温哥华|VANCOUVER|wengehua|b|YVR','迪拜|DUBAI|dibai|b|DXB','釜山|PUSAN|fushan|b|PUS','多伦多|TORONTO|duolunduo|b|YTO','法兰克福|FRANKFURT|falankefu|b|FRA','河内|HANOI|henei|b|HAN','旧金山(三藩市)|SAN FRANCISCO|jiujinshan|b|SFO','加德满都|KATHMANDU|jiademandou|b|KTM','金边|PHNOM PENH|jinbian|b|PNH','马累|MALE|malei|b|MLE','奥克兰|AUCKLAND|aokelan|b|AKL','皇后镇|QUEENSTOWN|huanghouzhen|b|UEE',
 '香港|HONG KONG|xianggang|c|HKG','首尔|SEOUL|shouer|c|SEL','台北|TAIPEI|taibei|c|TPE','东京|TOKYO|dongjing|c|TYO','新加坡|SINGAPORE|xinjiapo|c|SIN','澳门|MACAU|aomen|c|MFM','曼谷|BANGKOK|mangu|c|BKK','大阪|OSAKA|daban|c|OSA','胡志明市|HO CHI MINH CITY|huzhimingshi|c|SGN','马尼拉|Manila|manila|c|MNL','名古屋|NAGOYA|mingguwu|c|NGO','雅加达|JAKARTA|yajiada|c|JKT','吉隆坡|KUALA LUMPUR|jilongpo|c|KUL','釜山|PUSAN|fushan|c|PUS','巴厘岛|DENPASAR BALI|balidao|c|DPS','河内|HANOI|henei|c|HAN','马累|MALE|malei|c|MLE','加德满都|KATHMANDU|jiademandou|c|KTM','高雄|KAOHSIUNG|gaoxiong|c|KHH','福冈|FUKUOKA|fugang|c|FUK','金边|PHNOM PENH|jinbian|c|PNH','德里|DELHI|deli|c|DEL','札幌|SAPPORO|zhahuang|c|SPK','伊斯坦布尔|ISTANBUL|yisitanbuer|c|IST','乌兰巴托|ULAANBAATAR|wulanbatuo|c|ULN','孟买|MUMBAI|mengmai|c|BOM',
 '开罗|CAIRO|kailuo|d|CAI','约翰内斯堡|JOHANNESBURG|yuehanneisibao|d|JNB','开普敦|CAPE TOWN|kaipudun|d|CPT','拉各斯|LAGOS|lagesi|d|LOS','卢安达|LUANDA|luanda|d|LAD','毛里求斯|MAURITIUS|maoliqiusi|d|MRU','亚的斯亚贝巴|ADDIS ABABA|yadesiyabeiba|d|ADD','喀土穆|KHARTOUM|katumu|d|KRT','阿克拉|ACCRA|akela|d|ACC','阿尔及尔|ALGIERS|aerjier|d|ALG','卡萨布兰卡|CASABLANCA|kasabulanka|d|CAS','德班|DURBAN|deban|d|DUR','突尼斯|TUNIS|tunisi|d|TUN','卢萨卡|LUSAKA|lusaka|d|LUN','哈拉雷|HARARE|halalei|d|HRE','雅温得|YAOUNDE|yawende|d|YAO','哈博罗内|GABORONE|haboluonei|d|GBE','金沙萨|Kinshasa|jinshasa|d|FIH','马普托|MAPUTO|maputuo|d|MPM','杜阿拉|DOUALA|duala|d|DLA','弗里敦|FREETOWN|fulidun|d|FNA','阿比让|ABIDJAN|abirang|d|ABJ','卢克索|LUXOR|lukesuo|d|LXR',
 '伦敦|LONDON|lundun|e|LON','巴黎|PARIS|bali|e|PAR','法兰克福|FRANKFURT|falankefu|e|FRA','莫斯科|MOSCOW|mosike|e|MOW','罗马|ROME|luoma|e|ROM','阿姆斯特丹|AMSTERDAM|amusitedan|e|AMS','米兰|MILAN|milan|e|MIL','慕尼黑|MUNICH|munihei|e|MUC','斯德哥尔摩|Stockholm|sidegeermo|e|STO','柏林|Berlin|bolin|e|BER','马德里|MADRID|madeli|e|MAD','布鲁塞尔|brussels|bulusaier|e|BRU','哥本哈根|copenhagen|gebenhagen|e|CPH','赫尔辛基|Helsinki|heerxinji|e|HEL','维也纳|VIENNA|weiyena|e|VIE','巴塞罗那|BARCELONA|basailuonei|e|BCN','雅典|athens|yadian|e|ATH','爱丁堡|EDINBURGH|aidingbao|e|EDI','纽卡斯尔|NEWCASTLE|niukasier|e|NCL','日内瓦|GENEVA|rineiwa|e|GVA','圣彼得堡|SAINT PETERSBURG|shengbidebao|e|LED','格拉斯哥|Glasgow|gelasige|e|GLA','基辅|KIEV|jifu|e|IEV','布达佩斯|BUDAPEST|budapeisi|e|BUD','汉堡|HAMBURG|hanbao|e|HAM','布拉格|PRAGUE|bulage|e|PRG','杜塞尔多夫|DUSSELDORF|dusaierduofu|e|DUS','伯明翰(英国)|BIRMINGHAM(GB)|bominghan(yingguo)|e|BHX',
 '纽约|New York|niuyue|f|NYC','洛杉矶|LOS ANGELES|luoshanji|f|LAX','旧金山(三藩市)|SAN FRANCISCO|jiujinshan|f|SFO','温哥华|VANCOUVER|wengehua|f|YVR','芝加哥|CHICAGO|zhijiage|f|ORD','多伦多|TORONTO|duolunduo|f|YTO','西雅图|Seattle|xiyatu|f|BFI','华盛顿|WASHINGTON|huashengdun|f|WAS','波士顿|Boston|boshidun|f|BOS','底特律|DETROIT|ditelv|f|DTT','亚特兰大|ATLANTA|yatelanda|f|ATL','蒙特利尔|Montreal|mengtelier|f|YMQ','塞班|SAIPAN|saiban|f|SPN','达拉斯|Dallas|dalasi|f|DFW','费城|Philadelphia|feicheng|f|PHL','渥太华|Ottawa|wotaihua|f|YOW','墨西哥城|MEXICO CITY|moxigecheng|f|MEX','拉斯维加斯|LAS VEGAS|lasiweijiasi|f|LAS','卡尔加里|CALGARY|kaerjiali|f|YYC','迈阿密|Miami|maiami|f|MIA','丹佛|DENVER|danfo|f|DEN','奥兰多|ORLANDO|aolanduo|f|MCO','波特兰|PORTLAND|botelan|f|PDX','曼彻斯特(美国)|MANCHESTER(US)|manchesite(meiguo)|f|MHT','埃德蒙顿|Edmonton|aidemengdun|f|YEA','布宜诺斯艾利斯|BUENOS AIRES|buyinuosiailisi|f|BUE',
 '悉尼|SYDNEY|xini|g|SYD','奥克兰|AUCKLAND|aokelan|g|AKL','布里斯班|BRISBANE|bulisiban|g|BNE','阿德莱德|ADELAIDE|adelaide|g|ADL','珀斯|PERTH|posi|g|PER','惠灵顿|WELLINGTON|huilingdun|g|WLG','堪培拉|CANBERRA|kanpeila|g|CBR','凯恩斯|CAIRNS|kaiensi|g|CNS','楠迪|NADI|nandi|g|NAN','黄金海岸|GOLD COAST|huangjinhaian|g|OOL','帕皮提|PAPEETE|papiti|g|PPT','霍巴特|HOBART|huobate|g|HBA','达尔文|DARWIN|daerwen|g|DRW','达尼丁|DUNEDIN|daniding|g|DUD',
 '北京|beijing|bj|h|BJS', '上海|shanghai|sh|h|SHA', '广州|guangzhou|gz|h|CAN', '深圳|shenzhen|sz|h|SZX', '南京|nanjing|nj|h|NKG', '三亚|sanya|sy|h|SYX', '杭州|hangzhou|hz|h|HGH', '西安|xian|xa|h|XIY', '厦门|xiamen|xm|h|XMN', '武汉|wuhan|wh|h|WUH', '长沙|changsha|cs|h|CSX', '成都|chengdu|cd|h|CTU', '重庆|chongqing|cq|h|CKG', '青岛|qingdao|qd|h|TAO', '天津|tianjin|tj|h|TSN', '大连|dalian|dl|h|DLC', '南宁|nanning|nn|h|NNG', '哈尔滨|haerbin|heb|h|HRB', '海口|haikou|hk|h|HAK', '福州|fuzhou|fz|h|FOC', '郑州|zhengzhou|zz|h|CGO', '昆明|kunming|km|h|KMG', '乌鲁木齐|wulumuqi|wlmq|h|URC', '贵阳|guiyang|gy|h|KWE', '沈阳|shenyang|sy|h|SHE', '济南|jinan|jn|h|TNA', '长春|changchun|cc|h|CGQ', '石家庄|shijiazhuang|sjz|h|SJW', '太原|taiyuan|ty|h|TYN', '兰州|lanzhou|lz|h|LHW'];

IVcity.totalAllCitys = ['旧金山(三藩市)|SAN FRANCISCO|jiujinshan|SFO','奥尔堡|AALBORG|aoerbao|AAL','阿那帕|ANAPA|aneipa|AAQ','奥尔胡斯|AARHUS|aoerhusi|AAR','阿巴坎|ABAKAN|abakan|ABA','阿比让|ABIDJAN|abirang|ABJ','阿布贾|ABUJA|abujia|ABV','阿卡普尔科|ACAPULCO|akapuerke|ACA','阿克拉|ACCRA|akela|ACC','阿尔腾海恩|ALTENRHEIN|aertenghaien|ACH','阿克塔|ARCATA|aketa|ACV','阿达那|ADANA|adanei|ADA','亚的斯亚贝巴|ADDIS ABABA|yadesiyabeiba|ADD','阿德莱德|ADELAIDE|adelaide|ADL','阿加迪尔|AGADIR|ajiadier|AGA','马拉加|MALAGA|malajia|AGP','阿雅克肖|AJACCIO|ayakexiao|AJA','旭川|ASAHIKAWA|xuchuan|AKJ','奥克兰|AUCKLAND|aokelan|AKL','阿拉木图|ALMATY|alamutu|ALA','阿里坎特|ALICANTE|alikante|ALC','奥尔塔|ALTA|aoerta|ALF','阿尔及尔|ALGIERS|aerjier|ALG','阿勒颇|ALEPPO|alepo|ALP','阿哈迈达巴德|AHMEDABAD|ahamaidabade|AMD','安曼|AMMAN|anman|AMM','安汶|AMBON|anwen|AMQ','阿姆斯特丹|AMSTERDAM|amusitedan|AMS','昂热|ANGERS|angre|ANE','安卡拉|Ankara|ankala|ANK','安特卫普|ANTWERP|anteweipu|ANR','安提瓜岛|ANTIGUA|antiguadao|ANU','安科纳|ANCONA|ankena|AOI','青森|AOMORI|qingsen|AOJ','楠普拉|NAMPULA|nanpula|APL','阿皮亚|APIA|apiya|APW','安庆市|ANQING|anqingshi|AQG','亚喀巴|AQABA|yakaba|AQJ','阿斯特拉罕|ASTRAKHAN|asitelahan|ASF','奄美大岛|AMAMI O SHIMA|yanmeidadao|ASJ','阿斯马拉|ASMARA|asimala|ASM','亚松森|ASUNCION|yasongsen|ASU','雅典|athens|yadian|ATH','锡克教圣地|AMRITSAR|xikejiaoshengdi|ATQ','沃索|WARSAW|wosuo|WAW','阿维尼翁|AVIGNON|aweiniweng|AVN','安圭拉岛|ANGUILLA|anguiladao|AXA','阿尔梅尼亚|ARMENIA|aermeiniya|AXM','秋田|AKITA|qiutian|AXT','安塔利亚|ANTALYA|antaliya|AYT','巴林|BAHRAIN|balin|BAH','巴库|BAKU|baku|BAK','巴兰基亚|BARRANQUILLA|balanjiya|BAQ','包头市|BAOTOU|baotoushi|BAV','巴尔瑙尔|BARNAUL|baernaoer|BAX','布巴内斯瓦尔|BHUBANESWAR|bubaneisiwaer|BBI','巴塞罗那|BARCELONA|basailuonei|BCN','马晨|BANJARMASIN|machen|BDJ','万隆|BANDUNG|wanlong|BDO','瓦杜达拉|VADODARA|wadudala|BDQ','布林迪西|BRINDISI|bulindixi|BDS','贝尔格莱德|Belgrade|beiergelaide|BEG','柏林|Berlin|bolin|BER','布雷斯特|BREST|buleisite|BES','贝鲁特|BEIRUT|beilute|BEY','贝尔法斯特|BELFAST|beierfasite|BFS','布卡拉曼加|BUCARAMANGA|bukalamanjia|BGA','班吉|BANGUI|banji|BGF','卑尔根|BERGEN|beiergen|BGO','巴格达|BAGHDAD|bageda|BGW','布连海姆|BLENHEIM|bulianhaimu|BHE','布季|BHUJ|buji|BHJ','博帕尔|BHOPAL|bopaer|BHO','包纳加尔|BHAVNAGAR|baonajiaer|BHU','北海市|BEIHAI|beihaishi|BHY','巴斯蒂亚|BASTIA|basidiya|BIA','毕阿克|BIAK|biake|BIK','比亚丽兹|BIARRITZ|biyalizi|BIQ','布琼布拉|Bujumbura|buqiongbula|BJM','北京|BEIJING|beijing|BJS','亚庇|KOTA KINABALU|yabi|BKI','曼谷|BANGKOK|mangu|BKK','巴马科|Bamako|bamake|BKO','比隆|BILLUND|bilong|BLL','博洛尼亚|BOLOGNA|boluoniya|BLQ','班加罗尔|BANGALORE|banjialuoer|BLR','布兰太尔|BLANTYRE|bulantaier|BLZ','波尔多|BORDEAUX|boerduo|BOD','波哥大|BOGOTA|bogeda|BOG','布加斯|BOURGAS|bujiasi|BOJ','孟买|MUMBAI|mengmai|BOM','博奈尔|bonaire|bonaier|BON','博多|BODO|boduo|BOO','巴哩帕潘|BALIKPAPAN|balipapan|BPN','布拉戈维申斯克|BLAGOVESCHENSK|bulageweishensike|BQS','不莱梅|BREMEN|bulaimei|BRE','罗德岛|BARI|luodedao|BRI','伯尔尼|LINKOPING|boerni|LPI','布尔诺|BRNO|buernuo|BRQ','布鲁塞尔|brussels|bulusaier|BRU','保山市|BAOSHAN|baoshanshi|BSD','巴都贝萨尔|BATU BESAR|badoubeisaer|BTH','班达亚齐|BANDA ACEH|bandayaqi|BTJ','布达佩斯|BUDAPEST|budapeisi|BUD','布宜诺斯艾利斯|BUENOS AIRES|buyinuosiailisi|BUE','布加勒斯特|Bucharest|bujialesite|BUH','布拉瓦约|BULAWAYO|bulawayue|BUQ','伯利兹城|BELIZE CITY|bolizicheng|BZE','布拉柴维尔|BRAZZAVILLE|bulachaiweier|BZV','哥伦比亚|Columbia|gelunbiya|COU','卡利亚里|CAGLIARI|kaliyali|CAG','开罗|CAIRO|kailuo|CAI','广州|GUANGZHOU|guangzhou|CAN','卡萨布兰卡|CASABLANCA|kasabulanka|CAS','加拉加斯|CARACAS|jialajiasi|CCS','宿雾|CEBU|suwu|CEB','车里雅宾斯克|CHELYABINSK|cheliyabinsike|CEK','欧布雷贡城|CIUDAD OBREGON|oubuleigongcheng|CEN','卡昂|CAEN|kaang|CFR','常德市|CHANGDE|changdeshi|CGD','郑州|ZHENGZHOU|zhengzhou|CGO','长春|changchun|zhangchun|CGQ','基督城|CHRISTCHURCH|jiducheng|CHC','朝阳市|CHAOYANG|chaoyangshi|CHG','芝加哥|CHICAGO|zhijiage|ORD','夏洛茨维尔|CHARLOTTESVILLE|xialuociweier|CHO','查尔斯顿(南卡罗来纳州)|CHARLESTON|chaersidun(nankaluolainazhou)|CRW','奇科|CHICO|qike|CIC','赤峰市|CHIFENG|chifengshi|CIF','奇克拉约|CHICLAYO|qikelayue|CIX','科印拜陀|COIMBATORE|keyinbaituo|CJB','华雷斯城|CIUDAD JUAREZ|hualeisicheng|CJS','重庆|CHONGQING|zhongqing|CKG','科纳克里|Conakry|kenakeli|CKY','克卢日-纳波卡|CLUJ|keluri-naboka|CLJ','克利奇站|COLLEGE STATION|keliqizhan|CLL','卡利|CALI|kali|CLO','科利马|COLIMA|kelima|CLQ','夏洛特|charlotte|xialuote|CLT','卡尔维|CALVI|kaerwei|CLY','科伦坡|COLOMBO|kelunpo|CMB','卡门城|CIUDAD DEL CARMEN|kamencheng|CME','尚贝里|CHAMBERY|shangbeili|CMF','哥伦布|COLUMBUS|gelunbu|CMH','尚佩恩|CHAMPAIGN|shangpeien|CMI','汉考克|HANCOCK|hankaoke|CMX','克朗克里|CLONCURRY|kelangkeli|CNJ','卡尔斯巴德|Carlsbad|kaersibade|CNM','凯恩斯|CAIRNS|kaiensi|CNS','清迈|CHIANG MAI|qingmai|CNX','摩押|Moab|moya|CNY','科迪|Cody|kedi|COD','科托努|COTONOU|ketuonu|COO','科罗拉多斯普林|Colorado Springs|keluoladuosipulin|COS','卡斯珀|Casper|kasipo|CPR','开普敦|CAPE TOWN|kaipudun|CPT','坎皮纳格拉德|CAMPINA GRANDE|kanpinagelade|CPV','吕宋岛|LUZON ISLAND|lu:songdao|NCP','科珀斯科里斯蒂|Corpus Christi|keposikelisidi|CRP','查尔斯顿|CHARLESTON|chaersidun|CRW','圣路易斯欧匹斯堡|SAN LUIS OBISPO|shengluyisioupisibao|CSL','长沙|CHANGSHA|zhangsha|CSX','卡塔尼亚|CATANIA|kataniya|CTA','卡塔赫纳|CARTAGENA|katahena|CTG','查理维尔|CHARLEVILLE|chaliweier|CTL','切图马尔|CHETUMAL|qietumaer|CTM','成都|CHENGDU|chengdou|CTU','库利阿坎|CULIACAN|kuliakan|CUL','坎昆|CANCUN|kankun|CUN','库腊索岛|CURACAO|kulasuodao|CUR','奇瓦瓦|CHIHUAHUA|qiwawa|CUU','辛辛那提|cincinnati|xinxinneiti|CVG','库里蒂巴|CURITIBA|kulidiba|CWB','科苏梅尔|COZUMEL|kesumeier|CZM','常州|CHANGZHOU|changzhou|CZX','代托纳比奇|DAYTONA BEACH|daituonabiqi|DAB','达卡|DHAKA|daka|DAC','岘港|DA NANG|xiangang|DAD','大马士革|DAMASCUS|damashige|DAM','达累斯萨拉姆|DAR ES SALAAM|daleisisalamu|DAR','大同市|DATONG|datongshi|DAT','代顿|Dayton|daidun|DAY','达博|DUBBO|dabo|DBO','迪比克|DUBUQUE|dibike|DBQ','杜布罗夫尼克|DUBROVNIK|dubuluofunike|DBV','迪凯特|Decatur|dikaite|DEC','太原|TAIYUAN|taiyuan|TYN','迪凯特|Decatur|dikaite|DEC','道奇城|Dodge City|daoqicheng|DDC','丹东市|DANDONG|dandongshi|DDG','迪凯特|Decatur|dikaite|DEC','德里|DELHI|deli|DEL','丹佛|DENVER|danfo|DEN','多森|dothan|duosen|DHN','迪布鲁格尔|DIBRUGARH|dibulugeer|DIB','迪金森|Dickinson|dijinsen|DIK','帝力|DILI|dili|DIL','奠边府|DIEN BIEN PHU|dianbianfu|DIN','迪亚巴克尔|DIYARBAKIR|diyabakeer|CIY','占碑|JAMBI|zhanbei|DJB','查尔巴|DJERBA|chaerba|DJE','查亚普拉|JAYAPURA|chayapula|DJJ','达喀尔|DAKAR|dakaer|DKR','杜阿拉|DOUALA|duala|DLA','大连|DALIAN|dalian|DLC','大理市|DALIAN|dalishi|DLC','达曼|DAMMAM|daman|DMM','迪马布尔|DIMAPUR|dimabuer|DMU','敦煌市|DUNHUANG|dunhuangshi|DNH','第聂伯罗彼得罗夫斯克|DNEPROPETROVSK|dinieboluobideluofusike|DNK','多哈|DOHA|duoha|DOH','东营|DONGYING|dongying|DOY','德文波特|DEVONPORT|dewenbote|DPO','巴厘岛|DENPASAR BALI|balidao|DPS','德累斯顿|DRESDEN|deleisidun|DRS','达尔文|DARWIN|daerwen|DRW','得梅因|DES MOINES|demeiyin|DSM','底特律|DETROIT|ditelu:|DTT','都柏林|DUBLIN|doubolin|DUB','达尼丁|DUNEDIN|daniding|DUD','德班|DURBAN|deban|DUR','杜塞尔多夫|DUSSELDORF|dusaierduofu|DUS','德弗尔斯莱克|devils lake|defuersilaike|DVL','迪拜|DUBAI|dibai|DXB','张家界市|ZHANGJIAJIE|zhangjiajieshi|DYG','杜尚别|DUSHANBE|dushangbie|DYU','藻德济|DZAOUDZI|zaodeji|DZA','伊格尔|EAGLE|yigeer|EAA','卡尼|Kearney|kani|EAR','圣塞巴斯蒂安|SAN SEBASTIAN|shengsaibasidian|EAS','文纳奇|WENATCHEE|wennaqi|EAT','爱丁堡|EDINBURGH|aidingbao|EDI','埃尔多雷特|ELDORET|aierduoleite|EDL','凯法利尼亚|KEFALLINIA|kaifaliniya|EFL','伊格尔|EAGLE RIVER|yigeer|EGV','埃因霍温|EINDHOVEN|aiyinhuowen|EIN','比夫岛|BEEF ISLAND|bifudao|EIS','埃尔科|elko|aierke|EKO','北伊柳塞拉岛|NORTH ELEUTHERA|beiyiliusailadao|ELH','埃尔帕索|EL PASO|aierpasuo|ELP','东伦敦|EAST LONDON|donglundun|ELS','埃默拉尔德|EMERALD|aimolaerde|EMD','恩施市|ENSHI|enshishi|ENH','延安市|YANAN|yananshi|ENY','伊利|ERIE|yili|ERI','埃斯卡诺巴|escanaba|aisikanuoba|ESC','埃拉特|ELAT|ailate|ETH','约恩苏|JOENSUU|yueensu|JOE','埃文斯维尔|EVANSVILLE|aiwensiweier|EVV','新伯尔尼|NEW BERN|xinboerni|EWN','基韦斯德|KEY WEST|jiweiside|EYW','费尔班克斯|fairbanks|feierbankesi|FAI','法罗|FARO|faluo|FAO','法戈|FARGO|fage|FAR','费耶特维尔|fayetteville|feiyeteweier|FAY','卢本巴希|LUBUMBASHI|lubenbaxi|FBM','金沙萨|Kinshasa|jinshasa|FIH','福岛县|FUKUSHIMA|fudaoxian|FKS','劳德代尔堡|FORT LAUDERDALE|laodedaierbao|FLL','弗洛里亚诺波利斯|FLORIANOPOLIS|fuluoliyanuobolisi|FLN','弗洛伦斯|Florence|fuluolunsi|FLO','佛罗伦萨|FLORENCE|foluolunsa|FLO','蒙斯特|MUENSTER|mengsite|FMO','迈尔斯堡|FORT MYERS|maiersibao|FMY','弗里敦|FREETOWN|fulidun|FNA','平壤|PYONGYANG|pingrang|FNJ','弗林特|FLINT|fulinte|FNT','福州|FUZHOU|fuzhou|FOC','道奇堡|FORT DODGE|daoqibao|FOD','福塔雷萨|FORTALEZA|futaleisa|FOR','弗里波特|FREEPORT|fulibote|FPO','法兰克福|FRANKFURT|falankefu|FRA','比什凯克|BISHKEK|bishenkaike|FRU','菲加里|FIGARI|feijiali|FSC','史密斯堡|FORT SMITH|shimisibao|FSM','静冈|SHIZUOKA|jinggang|FSZ','阜阳|FUYANG|fuyang|FUG','福冈|FUKUOKA|fugang|FUK','韦恩堡|FORT WAYNE|weienbao|FWA','费耶特维尔|Fayetteville|feiyeteweier|FAY','费耶特维尔|FAYETTEVILLE|feiyeteweier|FAY','山形|YAMAGATA|shanxing|GAJ','古瓦哈蒂|GUWAHATI|guwahadi|GAU','格雅|GAYA|geya|GAY','哈博罗内|GABORONE|haboluonei|GBE','吉莱特|Gillette|jilaite|GCC','加登城|Garden City|jiadengcheng|GCK','大峡谷|GRAND CANYON|daxiagu|GCN','瓜达拉哈拉|GUADALAJARA|guadalahala|GDL','格旦斯克|Gdansk|gedansike|GDN','马加丹|MAGADAN|majiadan|GDX','斯波坎|Spokane|sibokan|GEG','乔治敦|georgetown|qiaozhidun|GEO','杰拉尔敦|GERALDTON|jielaerdun|GET','大福克斯|grand forks|dafukesi|GFK','朗维尤|LONGVIEW|langweiyou|GGG','总督港|GOVERNORS HARBOUR|zongdugang|GHB','广汉市|GUANGHAN|guanghanshi|GHN','吉斯伯恩|GISBORNE|jisiboen|GIS','大章克申|grand junction|dazhangkeshen|GJT','格拉斯哥|Glasgow|gelasige|GGW','盖恩斯维尔|gainesville|gaiensiweier|GNV','格林维尔|Greenville|gelinweier|GLH','格拉德斯通|GLADSTONE|geladesitong|GLT','盖恩斯维尔|GAINESVILLE|gaiensiweier|GNV','热那亚|GENOA|reneiya|GOA','果阿|GOA|guoa|GOI','下诺夫哥罗德里|NIZHNIY NOVGOROD|xianuofugeluodeli|GOJ','哥德堡|Gothenburg|gedebao|GOT','戈夫|GOVE|gefu|GOV','格尔夫波特(加佛港)|GULFPORT|geerfubote(jiafogang)|GPT','格林贝|GREEN BAY|gelinbei|GRB','格兰德岛|GRAND ISLAND|gelandedao|GRI','乔治|GEORGE|qiaozhi|GRJ','大急流|GRAND RAPIDS|dajiliu|GPZ','格拉纳达|GRANADA|gelanada|GRX','格拉茨|GRAZ|gelaci|GRZ','格林斯伯勒|GREENSBORO/HIGH POINT|gelinsibole|GSO','格林维尔|Greenville|gelinweier|GLH','大瀑布村|Great Falls|dapubucun|GTF','危地马拉|GUATEMALA CITY|weidimala|GUA','甘尼森|Gunnison|gannisen|GUC','关岛|GUAM|guandao|GUM','日内瓦|GENEVA|rineiwa|GVA','韦斯特兰|WESTERLAND|weisitelan|GWT','瓜亚基尔|GUAYAQUIL|guayajier|GYE','哥亚尼亚|GOIANIA|geyaniya|GYN','加齐安特普|GAZIANTEP|jiaqiantepu|GZT','海口|HAIKOU|haikou|HAK','汉堡|HAMBURG|hanbao|HAM','河内|HANOI|henei|HAN','哈里斯堡|Harrisburg|halisibao|HAR','豪格松|HAUGESUND|haogesong|HAU','哈瓦那|Havana|hawanei|HAV','霍巴特|HOBART|huobate|HBA','邯郸|HANDAN|handan|HDG','合艾|HAT YAI|heai|HDY','海伦娜|Helena|hailunna|HLN','黑河市|HEIHE|heiheshi|HEK','赫尔辛基|Helsinki|heerxinji|HEL','赫拉克利翁|HERAKLION|helakeliweng|HER','哈特福德|HARTFORD|hatefude|HFD','合肥|HEFEI|hefei|HFE','夜丰颂|MAE HONG SON|yefengsong|HGN','霍恩岛|HORN ISLAND|huoendao|HID','广岛|HIROSHIMA|guangdao|HIJ','克久拉霍|KHAJURAHO|kejiulahuo|HJR','函馆|HAKODATE|hanguan|HKD','普吉|PHUKET|puji|HKT','赫勒纳|HELENA|helena|HLN','哈密市|HAMI|hamishi|HMI','埃莫西约|HERMOSILLO|aimoxiyue|HMO','盛冈|HANAMAKI|shenggang|HNA','夏威夷|HONOLULU|xiaweiyi|HNL','奥尔金|Holguin|aoerjin|HOG','休伦|Huron|xiulun|HON','海防|HAIPHONG|haifang|HPH','哈尔滨|HARBIN|haerbin|HRB','哈拉雷|HARARE|halalei|HRE','胡尔加达|HURGHADA|huerjiada|HRG','哈灵根|HARLINGEN|halinggen|HRL','舟山市|ZHOUSHAN|zhoushanshi|HSN','赤塔|CHITA|chita|HTA','霍顿|Houghton|huodun|HTL','亨廷登|Huntington|hengtingdeng|HTS','顺化|HUE|shunhua|HUI','花莲|HUALIEN|hualian|HUN','纽黑文|New Haven|niuheiwen|HVN','西亚尼斯|Hyannis|xiyanisi|HYA','海得拉巴|HYDERABAD|haidelaba|HDD','海斯|Hays|haisi|HYS','雅西|IASI|yaxi|IAS','威奇托|Wichita|weiqituo|ICT','印多尔|INDORE|yinduoer|IDR','基辅|KIEV|jifu|IEV','伊斯法罕|ISFAHAN|yisifahan|IFN','伊尔库茨克|IRKUTSK|yierkucike|IKT','威尔明顿|wilmington|weiermingdun|ILM','威尔明顿|Wilmington|weiermingdun|ILM','威尔明顿|Wilmington|weiermingdun|ILM','伊莱|ISLAY|yilai|ILY','英帕尔|IMPHAL|yingpaer|IMF','银川市|YINCHUAN|yinchuanshi|INC','印地安那波利斯|INDIANAPOLIS|yindianneibolisi|IND','因斯布鲁克|INNSBRUCK|yinsibuluke|INN','马恩岛|ISLE OF MAN|maendao|IOM','复活节岛|EASTER ISLAND|fuhuojiedao|IPC','威廉斯波特|Williamsport|weiliansibote|IPT','芒特艾萨|MOUNT ISA|mangteaisa|ISA','伊斯兰堡|ISLAMABAD|yisilanbao|ISB','威利斯顿|Williston|weilisidun|ISN','伊斯坦布尔|ISTANBUL|yisitanbuer|IST','伊萨卡|ITHACA|yisaka|ITH','希洛|Hilo|xiluo|ITO','因佛卡吉尔|INVERCARGILL|yinfokajier|IVC','伊瓦洛|IVALO|yiwaluo|IVL','阿加尔塔拉|AGARTALA|ajiaertala|IXA','巴格多格拉|BAGDOGRA|bageduogela|IXB','昌迪加尔|CHANDIGARH|changdijiaer|IXC','曼加洛尔|MANGALORE|manjialuoer|IXE','查漠|JAMMU|chamo|IXJ','列城|LEH|liecheng|IXL','马杜赖|MADURAI|madulai|IXM','兰契|RANCHI|lanqi|IXR','锡尔杰尔|SILCHAR|xierjieer|IXS','奥兰加巴德|AURANGABAD|aolanjiabade|IXU','布莱尔港|PORT BLAIR|bulaiergang|IXZ','伊兹米尔|IZMIR|yizimier|IZM','出云|IZUMO|chuyun|IZO','贾杰布尔|JAIPUR|jiajiebuer|JAI','杰克逊|Jackson|jiekexun|JAC','焦特布尔|JODHPUR|jiaotebuer|JDH','景德镇市|JINGDEZHEN|jingdezhenshi|JDZ','吉达|JEDDAH|jida|JED','泽西|JERSEY|zexi|JER','贾姆纳加尔|JAMNAGAR|jiamunajiaer|JGA','嘉峪关市|JIAYUGUAN|jiayuguanshi|JGN','加登城|Garden City|jiadengcheng|GCK','詹姆斯敦|jamestown|zhanmusidun|JHW','吉布提市|DJIBOUTI|jibutishi|JIB','九江市|JIUJIANG|jiujiangshi|JIU','雅加达|JAKARTA|yajiada|JKT','佳木斯市|JIAMUSI|jiamusishi|JMU','约翰内斯堡|JOHANNESBURG|yuehanneisibao|JNB','朱诺|JUNEAU|zhunuo|JNU','锦州市|JINZHOU|jinzhoushi|JNZ','日惹|YOGYAKARTA|rire|JOG','乔哈特|JORHAT|qiaohate|JRH','斯基亚索斯|SKIATHOS|sijiyasuosi|JSI','约翰斯顿|JOHNSTOWN|yuehansidun|JST','朱巴|JUBA|zhuba|JUB','衢州市|QUZHOU|quzhoushi|JUZ','于伐斯居拉|JYVASKYLA|yufasijula|JYV','卡诺|KANO|kanuo|KAN','喀布尔|KABUL|kabuer|KBL','古晋|KUCHING|gujin|KCH','堪萨斯城|Kansas City|kansasicheng|MCI','肯达里|KENDARI|kendali|KDI','克麦罗沃|KEMEROVO|kemailuowo|KEJ','卡尔古利|KALGOORLIE|kaerguli|KGI','基加利|KIGALI|jijiali|KGL','喀什市|KASHI|kashenshi|KHG','高雄|KAOHSIUNG|gaoxiong|KHH','卡拉其|KARACHI|kalaqi|KHI','南昌|NANCHANG|nanchang|KHN','哈巴罗夫斯克|KHABAROVSK|habaluofusike|KHV','新泻|NIIGATA|xinxie|KIJ','金伯利|KIMBERLEY|jinboli|KIM','基苏木|KISUMU|jisumu|KIS','基蒂莱|KITHIRA|jidilai|KIT','克拉斯诺亚尔斯克|KRASNOJARSK|kelasinuoyaersike|KJA','孔敬|KHON KAEN|kongjing|KKC','北九州|KITA KYUSHU|beijiuzhou|KKJ','希尔克内斯|KIRKENES|xierkeneisi|KKN','卡利博|KALIBO|kalibo|KLO','卡马尔|KALMAR|kamaer|KLR','克拉根福|Klagenfurt|kelagenfu|KLU','卡罗维发利|KARLOVY VARY|kaluoweifali|KLV','卡拉马塔|KALAMATA|kalamata|KLX','宫崎|MIYAZAKI|gongqi|KMI','熊本|KUMAMOTO|xiongben|KMJ','小松|KOMATSU|xiaosong|KMQ','金门|KINMEN|jinmen|KNH','库努纳拉|KUNUNURRA|kununala|KNX','科纳|KONA|kena|KOA','古邦|KUPANG|gubang|KOE','柯克沃尔|KIRKWALL|kekewoer|KOI','鹿儿岛|KAGOSHIMA|luerdao|KOJ','赣州市|GANZHOU|ganzhoushi|KOW','雅普塞|YAP|yapusai|YAP','克拉科夫|Krakow|kelakefu|KRK','基律纳|KIRUNA|jilu:na|KRN','克拉斯诺达尔|KRASNODAR|kelasinuodaer|KRR','喀土穆|KHARTOUM|katumu|KRT','科斯拉耶卡罗林岛|KOSRAE|kesilayekaluolindao|KSA','卡尔斯塔德|KARLSTAD|kaersitade|KSD','卡拉特哈|KARRATHA|kalateha|KTA','加德满都|KATHMANDU|jiademandou|KTM','凯奇坎|KETCHIKAN|kaiqikan|KTN','基提拉|KITTILA|jitila|KTT','卡托维兹|Katowice|katuoweizi|KTW','萨玛拉|SAMARA|samala|KUF','钏路|KUSHIRO|chuanlu|KUH','吉隆坡|KUALA LUMPUR|jilongpo|KUL','库奥皮奥|KUOPIO|kuaopiao|KUO','卡瓦拉|KAVALA|kawala|KVA','夸贾林|KWAJALEIN|kuajialin|KWA','贵阳|guiyang|guiyang|KWE','科威特|KUWAIT|keweite|KWI','光州|GWANGJU|guangzhou|KWJ','桂林|GUILIN|guilin|KWL','科尼亚|KONYA|keniya|KYA','喀山|KAZAN|kashan|KZN','卢安达|LUANDA|luanda|LAD','拉斐特|LAFAYETTE|lafeite|LFT','拉尼永|LANNION|laniyong|LAI','兰辛|LANSING|lanxin|LAN','拉勒米|Laramie|lalemi|LAR','拉斯维加斯|LAS VEGAS|lasiweijiasi|LAS','拉穆|LAMU|lamu|LAU','劳顿|LAWTON|laodun|LAW','洛杉矶|LOS ANGELES|luoshanji|LAX','纽约|New York|niuyue|NYC','利伯勒尔|Liberal|liboleer|LBL','利伯维尔|LIBREVILLE|liboweier|LBV','拉那卡|LARNACA|laneika|LCA','拉科鲁尼亚|LA CORUNA|lakeluniya|LCG','莱克查尔斯|LAKE CHARLES|laikechaersi|LCH','豪勋爵岛|LORD HOWE ISLAND|haoxunjuedao|LDH','圣彼得堡|SAINT PETERSBURG|shengbidebao|PIE','阿尔梅里亚|ALMERIA|aermeiliya|LEI','莱索奔|LESOBENG|laisuoben|LES','列克星敦|Lexington|liekexingdun|LEX','拉菲特|Lafayette|lafeite|LFT','洛美|Lome|luomei|LFW','兰卡威(凌家卫岛)|LANGKAWI|lankawei(lingjiaweidao)|LGK','拉海尔|LAHORE|lahaier|LHE','兰州|LANZHOU|lanzhou|LHW','利摩日|LIMOGES|limori|LIG','考爱岛|KAUAI ISLAND|kaoaidao|LIH','长岛|Long Island|zhangdao|HAP','利马|LIMA|lima|LIM','小石城|LITTLE ROCK|xiaoshicheng|LIT','丽江市|LIJIANG|lijiangshi|LJG','卢布尔雅那|LJUBLJANA|lubueryanei|LJU','勒克瑙|LUCKNOW|lekenao|LKO','吕勒奥|LULEA|lu:leao|LLA','利隆圭|LILONGWE|lilonggui|LLW','勒芒|LE MANS|lemang|LME','克拉马斯福尔斯|KLAMATH FALLS|kelamasifuersi|LMT','临沧市|LINCANG|lincangshi|LNJ','林肯|LINCOLN|linken|LNK','林茨|LINZ|linci|LNZ','伦敦|LONDON|lundun|LON','拉各斯|LAGOS|lagesi|LOS','林彻平|LINKOPING|lincheping|LPI','朗勃拉邦|LUANG PRABANG|langbolabang|LPQ','南邦|LAMPANG|nanbang|LPT','拉雷多|LAREDO|laleiduo|LOI','朗里奇|LONGREACH|langliqi|LRE','洛里昂|LORIENT|luoliang|LRT','拉克鲁丝|LA CROSSE|lakelusi|LSE','萨姆堡|SHETLAND ISLANDS|samubao|LWK','朗斯斯顿|LAUNCESTON|langsisidun|LST','卢森堡|LUXEMBOURG|lusenbao|LUX','利文斯敦|LIVINGSTONE|liwensidun|LVI','刘易斯堡|lewisburg|liuyisibao|LWB','卢克索|LUXOR|lukesuo|LXR','洛阳市|LUOYANG|luoyangshi|LYA','连云港市|LIANYUNGANG|lianyungangshi|LYG','林奇堡|Lynchburg|linqibao|LYH','临沂市|LINYI|linyishi|LYI','朗伊尔城|LONGYEARBYEN|langyiercheng|LYR','柳州市|LIUZHOU|liuzhoushi|LZH','钦奈|CHENNAI|qinnai|MAA','马德里|MADRID|madeli|MAD','马朱罗|MAJURO|mazhuluo|MAJ','马拉开波|MARACAIBO|malakaibo|MAR','蒙巴萨|MOMBASA|mengbasa|MBA','蒙特哥湾|MONTEGO BAY|mengtegewan|MBJ','萨吉诺|Saginaw|sajinuo|MBS','麦库克|McCook|maikuke|MCK','马斯喀特|MUSCAT|masikate|MCT','梅森城|mason city|meisencheng|MCW','马哈奇卡拉|MAKHACHKALA|mahaqikala|MCX','马娜多|MANADO|manaduo|MDC','麦德林|MEDELLIN|maidelin|MDE','牡丹江|mudanjiang|mudanjiang|MDG','曼德勒|MANDALAY|mandele|MDL','门多萨|MENDOZA|menduosa|MDZ','默里迪恩|meridian|molidien|MEI','孟菲斯|MEMPHIS|mengfeisi|MEM','棉兰|MEDAN|mianlan|MES','迈克艾伦|McAllen|maikeailun|MFE','澳门|MACAU|aomen|MFM','梅德福|Medford|meidefu|MFR','马那瓜|MANAGUA|maneigua|MGA','蒙哥马利|Montgomery|menggemali|MGM','摩加迪沙|MOGADISHU|mojiadisha|MGQ','摩根敦|MORGANTOWN|mogendun|MGW','马什哈德|MASHAD|mashenhade|MHD','马什港|MARSH HARBOUR|mashengang|MHH','曼哈顿|MANHATTAN|manhadun|MHK','玛丽港|MARIEHAMN|maligang|MHQ','迈阿密|Miami|maiami|MIA','梅里达|MERIDA|meilida|MRD','穆齐法|MURCIA|muqifa|MJV','堪萨斯城|kansas city|kansasicheng|MCI','马斯基根|Muskegon|masijigen|MKG','麦凯|MACKAY|maikai|MKY','马耳他|MALTA|maerta|MLA','马累|MALE|malei|MLE','莫林|MOLINE|molin|MLI','莫雷里亚|MORELIA|moleiliya|MLM','梅利利亚|MELILLA|meililiya|MLN','门罗|MONROE|menluo|MLU','蒙罗维亚|monrovia|mengluoweiya|MLW','马拉蒂亚|MALATYA|maladiya|MLX','蒂赛德|DURHAM TEES VALLEY|disaide|MME','摩尔曼斯科|MURMANSK|moermansike|MMK','宫古|MIYAKO JIMA|gonggu|MMY','蒙特色拉特|MONTSERRAT|mengteselate|MNI','莫比尔|MOBILE|mobier|MOB','莫德斯托|MODESTO|modesituo|MOD','莫尔德|MOLDE|moerde|MOL','米诺|Minot|minuo|MOT','莫斯科|MOSCOW|mosike|MOW','蒙彼利埃|MONTPELLIER|mengbiliai|MPL','马普托|MAPUTO|maputuo|MPM','米尔迪拉|MILDURA|mierdila|MQL','克鲁格普马兰加|NELSPRUIT|kelugepumalanjia|NLP','米苏拉塔|MISURATA|misulata|MRA','马赛|MARSEILLE|masai|MRS','矿水城|MINERALNYE VODY|kuangshuicheng|MRV','莫里|MOREE|moli|MRZ','三泽|MISAWA|sanze|MSJ','麦迪逊|Madison|maidixun|MSN','米苏拉|MISSOULA|misula|MSO','明尼阿波利斯|MINNEAPOLIS|mingniabolisi|MSP','明斯克|MINSK|mingsike|MHP','穆斯|MUS|musi|MSR','马斯特里赫特|MAASTRICHT|masitelihete|MST','马塞卢|MASERU|masailu|MSU','新奥尔良|NEW ORLEANS|xinaoerliang|MSY','蒙特罗斯|MONTROSE|mengteluosi|MTJ','曼齐尼|MANZINI|manqini|MTS','米纳蒂特兰|MINATITLAN|minaditelan|MTT','慕尼黑|MUNICH|munihei|MUC','蒙得维的亚|MONTEVIDEO|mengdeweideya|MVD','墨西卡利|MEXICALI|moxikali|MXL','松山|MATSUYAMA|songshan|MYJ','马萨特蓝|MAZATLAN|masatelan|MZT','纳拉布里|NARRABRI|nalabuli|NAA','那格浦尔|NAGPUR|neigepuer|NAG','楠迪|NADI|nandi|NAN','南充市|NANCHONG|nanchongshi|NAO','那不勒斯|NAPLES|neibulesi|NAP','拿骚|nassau|nasao|NAS','内罗毕|nairobi|neiluobi|NBO','尼斯|NICE|nisi|NCE','纽卡斯尔|NEWCASTLE|niukasier|NCL','阿内西|ANNECY|aneixi|NCY','齐齐哈尔市|QIQIHAER|qiqihaershi|NDG','恩贾梅纳|NDJAMENA|enjiameina|NDJ','尼维斯岛|NEVIS|niweisidao|NEV','宁波|NINGBO|ningbo|NGB','名古屋|NAGOYA|mingguwu|NGO','长崎|NAGASAKI|zhangqi|NGS','芽庄|NHA TRANG|yazhuang|NHA','尼亚美|NIAMEY|niyamei|NIM','下瓦尔托夫斯克|NIZHNEVARTOVSK|xiawaertuofusike|NJC','努瓦克肖特|NOUAKCHOTT|nuwakexiaote|NKC','恩多拉|NDOLA|enduola|NLA','新拉莱多|NUEVO LAREDO|xinlalaiduo|NLD','內尔斯普雷特|NELSPRUIT|neiersipuleite|NLP','圣安娜|SANTA ANA|shenganna|SBL','南阳市|NANYANG|nanyangshi|NNY','努美阿|NOUMEA|numeia|NOU','纳皮尔-黑斯廷斯|NAPIER|napier-heisitingsi|NPE','新普里茅斯|NEW PLYMOUTH|xinpulimaosi|NPL','纽基|NEWQUAY|niuji|NQY','诺尔雪平|NORRKOPING|nuoerxueping|NRK','纳尔逊|NELSON|naerxun|NSN','南特|NANTES|nante|NTE','南通市|NANTONG|nantongshi|NTG','纳尔维克|NARVIK|naerweike|NVK','诺威奇|NORWICH|nuoweiqi|NWI','满洲里|MANZHOULI|manzhouli|NZH','瓦哈卡|OAXACA|wahaka|OAX','带广|OBIHIRO|daiguang|OBO','敖德萨|ODESSA|aodesa|ODS','卡胡卢伊|KAHULUI|kahuluyi|OGG','弗拉季卡夫卡兹|VLADIKAVKAZ|fulajikafukazi|OGZ','大岛|OSHIMA|dadao|OIM','大分|OITA|dafen|OIT','冲绳|OKINAWA|chongsheng|OKA','俄克拉何马城|Oklahoma City|ekelahemacheng|OKC','奥基岛|OKI ISLAND|aojidao|OKI','冈山|OKAYAMA|gangshan|OKJ','奥林匹克旦姆|OLYMPIC DAM|aolinpikedanmu|OLP','奥马哈|OMAHA|aomaha|OMA','鄂木斯克|OMSK|emusike|OMS','安大略|ONTARIO|andalu:e|ONT','波尔图|PORTO|boertu|OPO','诺福克|NORFOLK|nuofuke|OFK','科克|CORK|keke|ORK','奥兰多|ORLANDO|aolanduo|MCO','大阪|OSAKA|daban|OSA','厄斯特松德|OSTERSUND|esitesongde|OSD','奥斯陆|Oslo|aosilu|OSL','摩苏尔|Mosul|mosuer|OSM','俄斯特拉发|OSTRAVA|esitelafa|OSR','奥什|OSH|aoshen|OSS','北本德|North Bend|beibende|OTH','瓦加杜古|OUAGADOUGOU|wajiadugu|OUA','奥卢|OULU|aolu|OUL','新西伯利亚|NOVOSIBIRSK|xinxiboliya|OVB','帕迪尤卡|Paducah|padiyouka|PAH','太子港|PORT AU PRINCE|taizigang|PAP','巴黎|PARIS|bali|PAR','巴特那|PATNA|batenei|PAT','波尔本德尔|PORBANDAR|boerbendeer|PBD','西棕榈滩|WEST PALM BEACH|xizonglu:tan|PBI','杰克逊维尔(苏里南)|JACKSONVILLE|jiekexunweier(sulinan)|JAX','彼尔姆|PERM|biermu|PEE','佩雷拉|PEREIRA|peileila|PEI','马尔多那多港|PUERTO MALDONADO|maerduoneiduogang|PEM','槟城|PENANG|bincheng|PEN','珀斯|PERTH|posi|PER','白沙瓦|PESHAWAR|baishawa|PEW','佩皮尼昂|PERPIGNAN|peipiniang|PGF','哈科特港|PORT HARCOURT|haketegang|PHC','黑德兰港|PORT HEDLAND|heidelangang|PHE','费城|Philadelphia|feicheng|PHL','彭士洛|PHITSANULOK|pengshiluo|PHS','凤凰城|Phoenix|fenghuangcheng|PHX','皮奥里亚|PEORIA|piaoliya|PIA','波卡特洛|pocatello|bokateluo|PIH','皮埃尔|pierre|piaier|PIR','波伊提厄斯|POITIERS|boyitiesi|PIS','匹兹堡|Pittsburgh|pizibao|PIT','北干巴鲁|PEKANBARU|beiganbalu|PKU','巨港|PALEMBANG|jugang|PLM','佩尔斯顿|pellston|peiersidun|PLN','林肯港|PORT LINCOLN|linkengang|PLO','普罗维登西亚莱斯岛|PROVIDENCIALES|puluoweidengxiyalaisidao|PLS','帕卢|PALU|palu|PLW','伊丽莎白港|PORT ELIZABETH|yilishabaigang|PLZ','奔巴|PEMBA|benba|PMA','巴勒莫|PALERMO|balemo|PMO','潘普洛纳|PAMPLONA|panpuluona|PNA','彭萨科拉|Pensacola|pengsakela|PNS','愉港市|PORTO ALEGRE|yugangshi|POA','彭巴|PEMBA|pengba|PMA','普拉塔港|PUERTO PLATA|pulatagang|POP','波兹南|Poznan|bozinan|POZ','普罗瑟派恩|PROSERPINE|puluosepaien|PPP','帕皮提|PAPEETE|papiti|PPT','普雷斯克岛|Presque Isle|puleisikedao|PQI','麦夸里港|PORT MACQUARIE|maikualigang|PQQ','普雷斯科特|Prescott|puleisikete|PRC','布拉格|PRAGUE|bulage|PRG','普里什蒂纳|PRISTINA|pulishendina|PRN','比萨|PISA|bisa|PSA','帕斯科|PASCO|pasike|PSC','帕姆斯普林斯|palm springs|pamusipulinsi|PSP','彼得斯堡|POLOKWANE|bidesibao|PTG','皮特尔角城|Pointe A Pitre|piteerjiaocheng|PTP','波城|PAU|bocheng|PUF','阿雷纳斯角|PUNTA ARENAS|aleinasijiao|PUQ','釜山|PUSAN|fushan|PUS','普拉|PULA|pula|PUY','普罗维登斯|PROVIDENCE|puluoweidengsi|PVD','巴亚尔塔港|PUERTO VALLARTA|bayaertagang|PVR','波特兰|PORTLAND|botelan|PDX','彼得马里茨堡|PIETERMARITZBURG|bidemalicibao|PZB','马拉喀什|MARRAKECH|malakashen|RAK','拉皮德城|RAPID CITY|lapidecheng|RAP','拉巴特|RABAT|labate|RBA','理查德湾|RICHARDS BAY|lichadewan|RCB','雷丁|Redding|leiding|RDD','雷德蒙德|redmond|leidemengde|RDM','罗利达勒姆|RALEIGH DURHAM|luolidalemu|RDU','罗德兹|RODEZ|luodezi|RDZ','奥伦堡|ORENBURG|aolunbao|REN','暹粒|SIEM REAP|xianli|REP','雷诺萨|REYNOSA|leinuosa|REX','仰光|YANGON|yangguang|RGN','莱因兰德|rhinelander|laiyinlande|RHI','罗得|RHODES|luode|RHO','里士满|RICHMOND|lishiman|RCM','里约热内卢|RIO DE JANEIRO|liyuereneilu|RIO','利尻|RISHIRI|likao|RIS','里耶卡|RIJEKA|liyeka|RJK','罗克斯普林斯|Rock Springs|luokesipulinsi|RKS','台中|TAICHUNG|taizhong|RMQ','龙内比|RONNEBY|longneibi|RNB','里诺|RENO|linuo|RNO','雷恩|RENNES|leien|RNS','罗阿诺克|ROANOKE|luoanuoke|ROA','罗克汉普顿|ROCKHAMPTON|luokehanpudun|ROK','罗塔|ROTA|luota|ROP','罗托鲁阿|ROTORUA|luotuolua|ROT','罗斯托夫|ROSTOV|luosituofu|ROV','赖普尔|RAIPUR|laipuer|RPR','罗阿坦|roatan|luoatan|RTB','利雅得|RIYADH|liyade|RUH','罗瓦涅米|ROVANIEMI|luowaniemi|RVN','热舒夫|RZESZOW|reshufu|RZE','圣达菲|SANTA FE|shengdafei|SFN','圣萨尔瓦多|SAN SALVADOR|shengsaerwaduo|SAL','圣佩德罗苏拉|SAN PEDRO SULA|shengpeideluosula|SAP','圣安东尼奥|San Antonio|shengandongniao|SAT','萨凡纳|Savannah|safanna|SAV','圣芭芭拉|SANTA BARBARA|shengbabala|SBA','南本德|SOUTH BEND|nanbende|SBN','锡比乌|SIBIU|xibiwu|SBZ','斯泰特科利奇(大学城)|STATE COLLEGE|sitaitekeliqi(daxuecheng)|SCE','路易斯维尔|Louisville|luyisiweier|SDF','仙台|SENDAI|xiantai|SDJ','松兹瓦尔|SUNDSVALL|songziwaer|SDL','圣多明哥|SANTO DOMINGO|shengduomingge|STD','桑坦德|SANTANDER|sangtande|SDR','西雅图|Seattle|xiyatu|SEA','首尔|SEOUL|shouer|SEL','塞舌尔|MAHE ISLAND|saisheer|SEZ','谢莱夫特奥|SKELLEFTEA|xielaifuteao|SFT','瑟尔沃斯堡|SONDERBORG|seerwosibao|SGD','斯普林菲尔德|Springfield|sipulinfeierde|SGF','胡志明市|HO CHI MINH CITY|huzhimingshi|SGN','上海|SHANGHAI|shanghai|PVG','沈阳|SHENYANG|shenyang|SHE','沙迦|SHARJAH|shajia|SHJ','山海关市|SHANHAIGUAN|shanhaiguanshi|SHP','谢里登|Sheridan|xielideng|SHR','什里夫波特|Shreveport|shenlifubote|SHV','西安|XIAN|xian|SIA','新加坡|SINGAPORE|xinjiapo|SIN','辛菲罗波尔|SIMFEROPOL|xinfeiluoboer|SIP','圣何塞|SAN JOSE|shenghesai|SJO','萨拉热窝|SARAJEVO|salarewo|SJJ','圣约瑟|SAN JOSE|shengyuese|SJO','圣安吉洛|SAN ANGELO|shenganjiluo|SJT','圣胡安|SAN JUAN|shenghuan|SJU','石家庄市|SHIJIAZHUANG|shijiazhuangshi|SJW','塞萨洛尼基|THESSALONIKI|saisaluoniji|SKG','斯科普里|SKOPJE|sikepuli|SKP','盐湖城|SALT LAKE CITY|yanhucheng|SLC','圣卢西亚|Saint Lucia|shengluxiya|SLU','萨尔蒂约|SALTILLO|saerdiyue|SLW','圣马丽亚|SANTA MARIA|shengmaliya|RIA','奥兰治镇|SANTA ANA|aolanzhizhen|SBL','香浓|SHANNON|xiangnong|SNN','索洛|SOLO CITY|suoluo|SOC','索菲亚|SOFIA|suofeiya|SOF','南安普顿|SOUTHAMPTON|nananpudun|SOU','东京|TOKYO|dongjing|TYO','札幌|SAPPORO|zhahuang|SPK','塞班|SAIPAN|saiban|SPN','威奇托福尔斯|WICHITA FALLS|weiqituofuersi|SPS','斯普利特|SPLIT|sipulite|SPU','三宝垄|SEMARANG|sanbaolong|SRG','索尔兹伯里|Salisbury|suoerziboli|SBY','马拉博|malabo|malabo|SSG','沙姆沙伊赫|SHARM EL SHEIK|shamushayihe|SSH','布伦瑞克|BRUNSWICK|bulunruike|SSI','萨姆松|SAMSUN|samusong|SSX','圣路易斯|Saint Louis|shengluyisi|XLS','斯德哥尔摩|Stockholm|sidegeermo|STO','斯图加特|STUTTGART|situjiate|STR','夏洛特阿马利亚 圣托马斯|SAINT THOMAS|xialuoteamaliya shengtuomasi|STT','苏拉特|SURAT GUJARAT|sulate|STV','斯塔夫罗波尔|STAVROPOL|sitafuluoboer|STW','泗水|SURABAYA|sishui|SUB','桑瓦雷|sun valley|sangwalei|SUN','苏城|sioux city|sucheng|SUX','圣文森|SAINT VINCENT|shengwensen|SVD','萨翁林纳|SAVONLINNA|sawenglinna|SVL','叶卡捷琳堡|EKATERINBURG|yekajielinbao|SVX','汕头市|SHANTOU|shantoushi|SWA','斯特拉斯堡|STRASBOURG|sitelasibao|SXB','圣马滕|Saint Maarten|shengmateng|SXM','斯利那加|SRINAGAR|silineijia|SXR','悉尼|SYDNEY|xini|SYD','思茅市|SIMAO|simaoshi|SYM','庄內|SHONAI|zhuangnei|SYO','锡拉库扎|SYRACUSE|xilakuzha|SYR','三亚|SANYA|sanya|SYX','深圳|SHENZHEN|shenzhen|SZX','什切青|SZCZECIN|shenqieqing|SZZ','多巴哥岛|TOBAGO|duobagedao|TAB','大邱|DAEGU|daqiu|TAE','高松|TAKAMATSU|gaosong|TAK','坦皮科|TAMPICO|tanpike|TAM','青岛|QINGDAO|qingdao|TAO','塔什干|TASHKENT|tashengan|TAS','第比利斯|TBILISI|dibilisi|TBS','大不里士|TABRIZ|dabulishi|TBZ','特雷苏尔凯|Treasure Cay|teleisuerkai|TCB','塔城|TACHENG|tacheng|TCG','特内里费|TENERIFE|teneilifei|TCI','铜仁市|TONGREN|tongrenshi|TEN','特柳赖德|Telluride|teliulaide|TEX','提斯普尔|TEZPUR|tisipuer|TEZ','通辽|TONGLIAO|tongliao|TGO','特古西加尔巴|TEGUCIGALPA|teguxijiaerba|TGU','图斯特拉-古铁雷斯|TUXTLA GUTIERREZ|tusitela-gutieleisi|TGZ','德黑兰|TEHRAN|deheilan|THR','地拉那|TIRANA|dilanei|TIA','塔伊夫|TAIF|tayifu|TIF','蒂华纳|TIJUANA|dihuana|TIJ','特姆巴加普拉|TEMBAGAPURA|temubajiapula|TIM','的黎波里|TRIPOLI|deliboli|TIP','蒂瓦特|TIVAT|diwate|TIV','秋明|TYUMEN|qiuming|TJM','南榜市|BANDAR LAMPUNG|nanbangshi|TKG','德岛|TOKUSHIMA|dedao|TKS','土尔库|TURKU|tuerku|TKU','达拉哈西|TALLAHASSEE|dalahaxi|TLH','塔林|TALLINN|talin|TLL','土伦|TOULON|tulun|TLN','图卢兹|Toulouse|tuluzi|TLS','坦佩雷|TAMPERE|tanpeilei|TMP','济南|JINAN|jinan|TNA','丹吉尔|TANGIER|danjier|TNG','塔那那利佛|ANTANANARIVO|taneineilifo|TNR','托木斯克|TOMSK|tuomusike|TOF','托莱多|toledo|tuolaiduo|TOL','特隆姆瑟|TROMSO|telongmuse|TOS','富山|TOYAMA|fushan|TOY','坦帕|TAMPA|tanpa|TPA','托雷翁|TORREON|tuoleiweng|TRC','特隆赫姆|TRONDHEIM|telonghemu|TRD','陶朗阿加|TAURANGA|taolangajia|TRG','都灵|TURIN|douling|TRN','的里雅斯特|TRIESTE|deliyasite|TRS','特里凡德朗 提鲁瓦南萨普拉姆|THIRUVANANTHAPURAM|telifandelang tiluwanansapulamu|TRV','崔奇|TIRUCHIRAPPALLI|cuiqi|TRZ','对马|TSUSHIMA|duima|TSJ','天津|TIANJIN|tianjin|TSN','汤斯维尔|TOWNSVILLE|tangsiweier|TSV','鸟取|TOTTORI|niaoqu|TTJ','图尔|TOURS|tuer|TUF','TUL|TULSA|TUL|TUL','突尼斯|TUNIS|tunisi|TUN','陶波|TAUPO|taobo|TUO','图珀洛|tupelo|tupoluo|TUP','图森|TUCSON|tusen|TUS','特拉佛斯城|TRAVERSE CITY|telafosicheng|TVC','特温福尔斯|twin falls|tewenfuersi|TWF','台中|TAICHUNG|taizhong|RMQ','德克瑟卡那|TEXARKANA|dekesekanei|TXK','泰勒|TYLER|taile|TYR','诺克斯维尔|KNOXVILLE|nuokesiweier|TYS','特拉布宗|TRABZON|telabuzong|TZX','乌汶(乌汶叻差他尼)|UBON RATCHATHANI|wuwen(wuwenlechatani)|UBP','乌代布尔|UDAIPUR|wudaibuer|UDR','乌法|UFA|wufa|UFA','俄尔辛基|URGENCH|eerxinji|UGC','归仁|QUI NHON|guiren|UIH','基多|QUITO|jiduo|UIO','坎佩尔|QUIMPER|kanpeier|UIP','乌兰巴托|ULAANBAATAR|wulanbatuo|ULN','于默奥|UMEA|yumoao|UME','乌戎潘当|UJUNG PANDANG|wurongpandang|UPG','乌鲁木齐|URUMQI|wulumuqi|URC','素叻|SURAT THANI|sule|URT','苏梅岛|KOH SAMUI|sumeidao|USM','蔚山|ULSAN|yushan|USN','乌隆|UDON THANI|wulong|UTH','乌兰乌德|ULAN UDE|wulanwude|UUD','榆林|YULIN|yulin|UYN','瓦萨|VAASA|wasa|VAA','凡城|VAN|fancheng|VAN','瓦尔纳|VARNA|waerna|VAR','锡瓦斯|SIVAS|xiwasi|VAS','威尼斯|VENICE|weinisi|VCE','维多利亚瀑布|VICTORIA FALLS|weiduoliyapubu|VFA','比戈|VIGO|bige|VGO','瓦伦西亚|VALENCIA|walunxiya|VLC','瓦尔多斯塔|valdosta|waerduosita|VLD','维拉港|PORT VILA|weilagang|VLI','瓦拉纳西|VARANASI|walanaxi|VNS','伏尔加格勒|VOLGOGRAD|fuerjiagele|VOG','华尔顿堡|VALPARAISO|huaerdunbao|VPS','瓦尔考斯|VARKAUS|waerkaosi|VRK','维罗纳|VERONA|weiluona|VRN','比亚埃尔莫萨|VILLAHERMOSA|biyaaiermosa|VSA','万象|VIENTIANE|wanxiang|VTE','维萨卡帕特南|VISHAKHAPATNAM|weisakapatenan|VTZ','圣克鲁兹|SANTA CRUZ|shengkeluzi|RZA','符拉迪沃斯托克|VLADIVOSTOK|fuladiwosituoke|VVO','旺阿努伊|WANGANUI|wanganuyi|WAG','华盛顿|WASHINGTON|huashengdun|WAS','华沙|WARSAW|huasha|WAW','温特和克|WINDHOEK|wenteheke|WDH','潍坊|WEIFANG|weifang|WEF','威海|weihai|weihai|WEH','韦帕|WEIPA|weipa|WEI','沃加沃加|WAGGA WAGGA|wojiawojia|WGA','瓦卡塔尼|WHAKATANE|wakatani|WHK','威克|WICK|weike|WIC','温顿|WINTON|wendun|WIN','稚内|WAKKANAI|zhinei|WKJ','惠灵顿|WELLINGTON|huilingdun|WLG','温州|WENZHOU|wenzhou|WNZ','旺阿雷|WHANGAREI|wangalei|WRE','沃兰|Worland|wolan|WRL','弗罗茨瓦夫|Wroclaw|fuluociwafu|WRO','乌海市|WUHAI|wuhaishi|WUA','武汉|WUHAN|wuhan|WUH','武夷山市|WUYISHAN|wuyishanshi|WUS','无锡|WUXI|wuxi|WUX','西昌市|XICHANG|xichangshi|XIC','厦门|XIAMEN|shamen|XMN','西宁市|XINING|xiningshi|XNN','徐州|XUZHOU|xuzhou|XUZ','雅温得|YAOUNDE|yawende|YAO','贝克莫|Baie Comeau|beikemo|YBC','巴戈特维尔|Bagotville|bageteweier|YBG','宜宾市|YIBIN|yibinshi|YBP','纳奈莫|Nanaimo|nanaimo|YCD','卡斯尔加|Castlegar|kasierjia|YCG','迪尔莱克|Deer Lake|dierlaike|YDF','埃德蒙顿|Edmonton|aidemengdun|YEA','弗雷德里顿|Fredericton|fuleidelidun|YFC','米子|YONAGO|mizi|YGJ','金斯敦|kingston|jinsidun|KIN','加斯佩|Gaspe|jiasipei|YGP','哈利法克斯|Halifax|halifakesi|YHZ','宜昌市|YICHANG|yichangshi|YIH','伊宁市|YINING|yiningshi|YIN','义乌市|YIWU|yiwushi|YIW','甘露市|KAMLOOPS|ganlushi|YKA','亚基马|YAKIMA|yajima|YKM','雅库茨克|YAKUTSK|yakucike|YKS','基隆拿|KELOWNA|jilongna|YLW','麦梅利堡|FORT MCMURRAY|maimeilibao|YMM','蒙特利尔|Montreal|mengtelier|YMQ','希布加莫|Chibougamau|xibujiamo|YMT','延布|YANBU|yanbu|YNB','延吉|yanji|yanji|YNJ','烟台|YANTAI|yantai|YNT','渥太华|Ottawa|wotaihua|YOW','鲁珀特王子城|Prince Rupert|lupotewangzicheng|YPR','魁北克|quebec|kuibeike|YQB','温莎|Windsor|wensha|YQG','莱斯布里奇|Lethbridge|laisibuliqi|YQL','蒙克顿|MONCTON|mengkedun|YQM','科莫克斯|Comox|kemokesi|YQQ','里贾纳|Regina|lijiana|YQR','雷湾|THUNDER BAY|leiwan|YQT','甘德|Gander|gande|YQX','克内尔|Quesnel|keneier|YQZ','萨德伯里|SUDBURY|sadeboli|YSB','圣约翰|SAINT JOHN|shengyuehan|SJF','多伦多|TORONTO|duolunduo|YTO','蒂明斯|Timmins|dimingsi|YTS','鲁安|ROUYN|luan|YUY','莫罗尼|MORONI|moluoni|YVA','温哥华|VANCOUVER|wengehua|YVR','温尼贝格|WINNIPEG|wennibeige|YWG','瓦布什|Wabush|wabushen|YWK','威廉斯湖|Williams Lake|weiliansihu|YWL','克兰布鲁克|Cranbrook|kelanbuluke|YXC','萨斯卡通|Saskatoon|sasikatong|YXE','乔治王子城|PRINCE GEORGE|qiaozhiwangzicheng|YXS','露台|TERRACE|lutai|YXT','怀特霍斯|WHITEHORSE|huaitehuosi|YXY','北湾|NORTH BAY|beiwan|YYB','卡尔加里|CALGARY|kaerjiali|YYC','史密瑟斯|Smithers|shimisesi|YYD','彭蒂克顿|PENTICTON|pengdikedun|YYF','夏洛特敦|CHARLOTTETOWN|xialuotedun|YHG','古斯贝|Goose Bay|gusibei|YYR','耶洛奈夫|Yellowknife|yeluonaifu|YZF','萨尼亚|Sarnia|saniya|YZR','扎达尔|ZADAR|zhadaer|ZAD','萨格勒布|ZAGREB|sagelebu|ZAG','昭通市|ZHAOTONG|zhaotongshi|ZAT','萨拉戈萨|ZARAGOZA|salagesa|ZAZ','萨卡特卡斯|ZACATECAS|sakatekasi|ZCL','湛江市|ZHANJIANG|zhanjiangshi|ZHA','印坦巴|IXTAPA ZIHUATANEJ|yintanba|ZIH','曼萨尼略|MANZANILLO|mansanilu:e|ZLO','纽曼|NEWMAN|niuman|ZNE','桑给巴尔|ZANZIBAR|sangjibaer|ZNZ','皇后镇|QUEENSTOWN|huanghouzhen|UEE','苏黎士|ZURICH|sulishi|ZRH','珠海市|ZHUHAI|zhuhaishi|ZUH'];


/* 正则表达式 筛选中文城市名、拼音、首字母 */
//
IVcity.regEx = /^([\u4E00-\u9FA5\uf900-\ufa2d()]+)\|([\w\s()]+)\|([\w()]+)\|*(\w)\w*\|(\w{3})$/i;
IVcity.regExSpell = /^([\u4E00-\u9FA5\uf900-\ufa2d()\s\/-]+)\|([\w\s.()-\/]+)\|([\w\s()\/-]+)\|(\w{3})$/i;//ct
IVcity.regExChiese = /([\u4E00-\u9FA5\uf900-\ufa2d()\/-]+)/;

/* *
 * 格式化城市数组为对象oCity，按照a-h,i-p,q-z,hot热门城市分组：
 * {HOT:{hot:[]},ABCDEFGH:{a:[1,2,3],b:[1,2,3]},IJKLMNOP:{i:[1.2.3],j:[1,2,3]},QRSTUVWXYZ:{}}
 * */
/***update by 12061818***/
(function () {
    var citys = IVcity.allCity, match, letter, cityName,//ct
        regEx = IVcity.regEx;
    if (!IVcity.oCity) {
        IVcity.oCity = {outHot:{}, Asia:{}, Africa:{}, Europe:{}, America:{}, Oceania:{}, Domestic:{}};
        //console.log(citys.length);
        for (var i = 0, n = citys.length; i < n; i++) {
            match = regEx.exec(citys[i]);
            if(!match) {
            	//console.log(citys[i]);
            }
            letter = match[4].toUpperCase();
            cityName = match[1] + '|' + match[5];//ct
            /*
            if ('A' === letter) {
                if (!IVcity.oCity.inHot[letter]) IVcity.oCity.inHot[letter] = [];
                IVcity.oCity.inHot[letter].push(cityName);
            } else */
            if ('B' === letter) {
                if (!IVcity.oCity.outHot[letter]) IVcity.oCity.outHot[letter] = [];
                IVcity.oCity.outHot[letter].push(cityName);
            }else if ('C' === letter) {
                if (!IVcity.oCity.Asia[letter]) IVcity.oCity.Asia[letter] = [];
                IVcity.oCity.Asia[letter].push(cityName);
            }else if ('D' === letter) {
                if (!IVcity.oCity.Africa[letter]) IVcity.oCity.Africa[letter] = [];
                IVcity.oCity.Africa[letter].push(cityName);
            }else if ('E' === letter) {
                if (!IVcity.oCity.Europe[letter]) IVcity.oCity.Europe[letter] = [];
                IVcity.oCity.Europe[letter].push(cityName);
            }else if ('F' === letter) {
                if (!IVcity.oCity.America[letter]) IVcity.oCity.America[letter] = [];
                IVcity.oCity.America[letter].push(cityName);
            }else if ('G' === letter) {
                if (!IVcity.oCity.Oceania[letter]) IVcity.oCity.Oceania[letter] = [];
                IVcity.oCity.Oceania[letter].push(cityName);
            }else if ('H' === letter) {
                if (!IVcity.oCity.Domestic[letter]) IVcity.oCity.Domestic[letter] = [];
                IVcity.oCity.Domestic[letter].push(cityName);
            }
        }
    }
})();
/* 城市HTML模板 */
IVcity._template = [
    '<p class="tip">热门城市(支持汉字/拼音/城市三字码)</p>',
    '<ul>',
    '<li class="on">国际热门</li>',
    '<li>亚洲</li>',
    '<li>非洲</li>',
    '<li>欧洲</li>',
    '<li>美洲</li>',
    '<li>大洋洲</li>',
    '<li>国内热门</li>',
    '</ul>'
];
/***end***/
/* *
 * 城市控件构造函数
 * @CitySelector
 * */

IVcity.CitySelector = function () {
    this.initialize.apply(this, arguments);
};

IVcity.CitySelector.prototype = {

    constructor:IVcity.CitySelector,

    /* 初始化 */
    initialize :function (options) {
        if(typeof options.callback == 'function') {
            this.callback = options.callback;
        }
        var input = options.input;
        this.input = IVcity._m.$('#'+ input);
        this.inputEvent();
    },

    /* *
     * @createWarp
     * 创建城市BOX HTML 框架
     * */

    createWarp:function(){
        //var inputPos = Vcity._m.getPos(this.input);
        var inputPos = $(this.input).position();
        var div = this.rootDiv = document.createElement('div');
        var that = this;

        // 设置DIV阻止冒泡
        IVcity._m.on(this.rootDiv,'click',function(event){
            IVcity._m.stopPropagation(event);
        });

        // 设置点击文档隐藏弹出的城市选择框
        IVcity._m.on(document, 'click', function (event) {
            event = IVcity._m.getEvent(event);
            var target = IVcity._m.getTarget(event);
            if(target == that.input) return false;
            if (that.cityBox)IVcity._m.addClass('hide', that.cityBox);
            if (that.ul)IVcity._m.addClass('hide', that.ul);
            if(that.myIframe)IVcity._m.addClass('hide',that.myIframe);
        });
        div.className = 'citySelector';
        div.style.position = 'absolute';
        div.style.left = inputPos.left + 'px';
        div.style.top = inputPos.top+$(this.input).outerHeight() + 'px';
        div.style.zIndex = 999999;

        // 判断是否IE6，如果是IE6需要添加iframe才能遮住SELECT框
        var isIe = (document.all) ? true : false;
        var isIE6 = this.isIE6 = isIe && !window.XMLHttpRequest;
        if(isIE6){
            var myIframe = this.myIframe =  document.createElement('iframe');
            myIframe.frameborder = '0';
            myIframe.src = 'about:blank';
            myIframe.style.position = 'absolute';
            myIframe.style.filter = 'alpha(opacity= 0)';
            myIframe.style.zIndex = '-1';
            myIframe.style.zIndex = '-1';
            this.rootDiv.appendChild(this.myIframe);
        }

        var childdiv = this.cityBox = document.createElement('div');
        childdiv.className = 'cityBox';
        childdiv.id = 'cityBox';
        childdiv.innerHTML = IVcity._template.join('');
        var hotCity = this.hotCity =  document.createElement('div');
        hotCity.className = 'hotCity';
        childdiv.appendChild(hotCity);
        div.appendChild(childdiv);
        this.createHotCity();
    },

    /* *
     * @createHotCity
     * TAB下面DIV：hot,a-h,i-p,q-z 分类HTML生成，DOM操作
     * {HOT:{hot:[]},ABCDEFGH:{a:[1,2,3],b:[1,2,3]},IJKLMNOP:{},QRSTUVWXYZ:{}}
     **/
    createHotCity:function(){
        var odiv,odl,odt,odd,odda=[],str,key,ckey,sortKey,regEx = IVcity.regEx,
            oCity = IVcity.oCity;           
        for(key in oCity){
            odiv = this[key] = document.createElement('div');
            // 先设置全部隐藏hide
            odiv.className = key + ' ' + 'cityTab hide';
            sortKey=[];
            for(ckey in oCity[key]){
                sortKey.push(ckey);
                // ckey按照ABCDEDG顺序排序
                sortKey.sort();
            }
            for(var j=0,k = sortKey.length;j<k;j++){
                odl = document.createElement('dl');
                odt = document.createElement('dt');
                odd = document.createElement('dd');
                odt.innerHTML = sortKey[j] == 'hot'?'&nbsp;':'&nbsp;';//update by 12061818
                odda = [];
                for(var i=0,n=oCity[key][sortKey[j]].length;i<n;i++){ 
                    cityArr = oCity[key][sortKey[j]][i].split('|');//ct
                    str = '<a href="javascript:" title="' + cityArr[0] + '" code="' + cityArr[1] + '">' + cityArr[0] + '</a>';
                    odda.push(str);
                }

                odd.innerHTML = odda.join('');
                odl.appendChild(odt);
                odl.appendChild(odd);
                odiv.appendChild(odl);
            }

            // 移除热门城市的隐藏CSS
            IVcity._m.removeClass('hide',this.outHot);//update by 12061818
            this.hotCity.appendChild(odiv);
        }
        $(this.input).parent().append($(this.rootDiv));
        
        // IE6
        this.changeIframe();

        this.tabChange();
        this.linkEvent();
    },

    /* *
     *  tab按字母顺序切换
     *  @ tabChange
     * */

    tabChange:function(){
        var lis = IVcity._m.$('li',this.cityBox);
        var divs = IVcity._m.$('div',this.hotCity);
        var that = this;
        for(var i=0,n=lis.length;i<n;i++){
            lis[i].index = i;
            lis[i].onclick = function(){
                for(var j=0;j<n;j++){
                    IVcity._m.removeClass('on',lis[j]);
                    IVcity._m.addClass('hide',divs[j]);
                }
                IVcity._m.addClass('on',this);
                IVcity._m.removeClass('hide',divs[this.index]);
                /* IE6 改变TAB的时候 改变Iframe 大小*/
                that.changeIframe();
            };
        }
    },

    /* *
     * 城市LINK事件
     *  @linkEvent
     * */

    linkEvent:function(){
        var links = IVcity._m.$('a',this.hotCity);
        var that = this;
        for(var i=0,n=links.length;i<n;i++){
            links[i].onclick = function(){
            	$('#errorTip') != undefined ? $('#errorTip').remove() : '';
                that.input.setAttribute('code', this.getAttribute('code'));
                that.input.value = this.innerHTML;
                that.callback  && that.callback(this.innerHTML);
                IVcity._m.addClass('hide',that.cityBox);
                IVcity._m.addClass('hide',that.myIframe);
            };
        }
    },
    /* *
     * INPUT城市输入框事件
     * @inputEvent
     * */

    inputEvent:function(){
        var that = this;
        if(!$(this.input)[0]){
            return false;
        }
        IVcity._m.on(this.input,'click',function(event){
            event = event || window.event;
            //Vcity._m.stopPropagation(event);
            if(!that.cityBox){
                that.createWarp();
            }else if(!!that.cityBox && IVcity._m.hasClass('hide',that.cityBox)){
                // slideul 不存在或者 slideul存在但是是隐藏的时候 两者不能共存
                if(!that.ul || (that.ul && IVcity._m.hasClass('hide',that.ul))){
                    IVcity._m.removeClass('hide',that.cityBox);

                    /* IE6 移除iframe 的hide 样式 */
                    //alert('click');
                    IVcity._m.removeClass('hide',that.myIframe);
                    that.changeIframe();
                }
            }
        });
        IVcity._m.on(this.input,'focus',function(){
            that.input.select();
            //if(that.input.value == '城市名称') that.input.value = '';
        });
        IVcity._m.on(this.input,'blur',function(){
        	if(that.input.value != ''){
                var searchResult = [];
                var city = [];
                for (var i = 0, n = IVcity.totalAllCitys.length; i < n; i++) {
                	city = IVcity.totalAllCitys[i].split("|");
                    if (that.input.value == city[0]) {
                        searchResult['city'] = city[0];
                        searchResult['code'] = city[3];
                        break;
                    }
                }
                if(searchResult['city'] != undefined && searchResult['code'] != undefined){
                	that.input.setAttribute('code', searchResult['code']);
                }else{
                	that.input.setAttribute('code', "");
                }
                that.callback  && that.callback(that.input.value);
            }
        });
        IVcity._m.on(this.input,'keyup',function(event){
            event = event || window.event;
            var keycode = event.keyCode;
            IVcity._m.addClass('hide',that.cityBox);
            that.createUl();

            /* 移除iframe 的hide 样式 */
            IVcity._m.removeClass('hide',that.myIframe);

            // 下拉菜单显示的时候捕捉按键事件
            if(that.ul && !IVcity._m.hasClass('hide',that.ul) && !that.isEmpty){
                that.KeyboardEvent(event,keycode);
            }
        });
    },

    /* *
     * 生成下拉选择列表
     * @ createUl
     * */

    createUl:function () {//update by 12061818
        //console.log('createUL');
        var str;
        var value = IVcity._m.trim(this.input.value);
        // 当value不等于空的时候执行
        if (value !== '') {
            var reg = new RegExp("^" + value + "|\\|" + value, 'gi');
            var searchResult = [];
            for (var i = 0, n = IVcity.totalAllCitys.length; i < n; i++) {
                if (reg.test(IVcity.totalAllCitys[i])) {
                    var match = IVcity.regExSpell.exec(IVcity.totalAllCitys[i]);
                    if(!match){
                    	//console.log(IVcity.totalAllCitys[i]);
                    }
                    if (searchResult.length !== 0) {
                        str = '<li><b class="cityname" code="' + match[4] + '">' + match[1] + '</b><b class="cityspell">' + match[2] + '</b></li>';
                    } else {
                        str = '<li class="on"><b class="cityname" code="' + match[4] + '">' + match[1] + '</b><b class="cityspell">' + match[2] + '</b></li>';
                    }
                    searchResult.push(str);
                }
            }
            this.isEmpty = false;
            // 如果搜索数据为空
            if (searchResult.length == 0) {
                this.isEmpty = true;
                str = '<li class="empty">对不起，没有找到数据 "<em>' + value + '</em>"</li>';
                searchResult.push(str);
            }
            // 如果slideul不存在则添加ul
            if (!this.ul) {
                var ul = this.ul = document.createElement('ul');
                ul.className = 'cityslide';
                this.rootDiv && this.rootDiv.appendChild(ul);
                // 记录按键次数，方向键
                this.count = 0;
            } else if (this.ul && IVcity._m.hasClass('hide', this.ul)) {
                this.count = 0;
                IVcity._m.removeClass('hide', this.ul);
            }
            this.ul.innerHTML = searchResult.join('');

            /* IE6 */
            this.changeIframe();

            // 绑定Li事件
            this.liEvent();
        }else{
            IVcity._m.addClass('hide',this.ul);
            IVcity._m.removeClass('hide',this.cityBox);

            IVcity._m.removeClass('hide',this.myIframe);

            this.changeIframe();
        }
    },

    /* IE6的改变遮罩SELECT 的 IFRAME尺寸大小 */
    changeIframe:function(){
        if(!this.isIE6)return;
        this.myIframe.style.width = this.rootDiv.offsetWidth + 'px';
        this.myIframe.style.height = this.rootDiv.offsetHeight + 'px';
    },

    /* *
     * 特定键盘事件，上、下、Enter键
     * @ KeyboardEvent
     * */

    KeyboardEvent:function(event,keycode){
        var lis = IVcity._m.$('li',this.ul);
        var len = lis.length;
        switch(keycode){
            case 40: //向下箭头↓
                this.count++;
                if(this.count > len-1) this.count = 0;
                for(var i=0;i<len;i++){
                    IVcity._m.removeClass('on',lis[i]);
                }
                IVcity._m.addClass('on',lis[this.count]);
                break;
            case 38: //向上箭头↑
                this.count--;
                if(this.count<0) this.count = len-1;
                for(i=0;i<len;i++){
                    IVcity._m.removeClass('on',lis[i]);
                }
                IVcity._m.addClass('on',lis[this.count]);
                break;
            case 13: // enter键
                this.input.value = IVcity.regExChiese.exec(lis[this.count].innerHTML)[0];
                this.callback  && this.callback(this.input.value);//update by 12061818
                IVcity._m.addClass('hide',this.ul);
                IVcity._m.addClass('hide',this.ul);
                /* IE6 */
                IVcity._m.addClass('hide',this.myIframe);
                break;
            default:
                break;
        }
    },

    /* *
     * 下拉列表的li事件
     * @ liEvent
     * */

    liEvent:function(){
        var that = this;
        var lis = IVcity._m.$('li',this.ul);
        for(var i = 0,n = lis.length;i < n;i++){
            IVcity._m.on(lis[i],'click',function(event){
                event = IVcity._m.getEvent(event);
                var target = IVcity._m.getTarget(event);
                that.input.value = IVcity.regExChiese.exec(target.innerHTML)[0];
                that.input.setAttribute('code', target.firstChild.getAttribute('code'));
                that.callback  && that.callback(that.input.value);//update by 12061818
                IVcity._m.addClass('hide',that.ul);
                /* IE6 下拉菜单点击事件 */
                IVcity._m.addClass('hide',that.myIframe);
            });
            IVcity._m.on(lis[i],'mouseover',function(event){
                event = IVcity._m.getEvent(event);
                var target = IVcity._m.getTarget(event);
                IVcity._m.addClass('on',target);
            });
            IVcity._m.on(lis[i],'mouseout',function(event){
                event = IVcity._m.getEvent(event);
                var target = IVcity._m.getTarget(event);
                IVcity._m.removeClass('on',target);
            });
        }
    }
};

