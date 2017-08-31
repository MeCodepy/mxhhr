/* *
 * 全局空间 IDomestic
 * */
var IDomestic = {};
/* *
 * 静态方法集
 * @name _m
 * */
IDomestic._m = {
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
                    tagAll = IDomestic._m.$('*', context);
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
        node.className = IDomestic._m.hasClass(c,node) ? node.className : node.className + ' ' + c ;
    },

    /* 移除样式名 */
    removeClass:function (c, node) {
        var reg = new RegExp("(^|\\s+)" + c + "(\\s+|$)", "g");
        if(!IDomestic._m.hasClass(c,node))return;
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

/* 所有城市数据,可以按照格式自行添加（北京|beijing|bj|bjs），前20条为热门城市 */

IDomestic.allCity = ['北京|beijing|bj|BJS', '上海|shanghai|sh|SHA', '广州|guangzhou|gz|CAN', '深圳|shen|s|SZX', '南京|nanjing|nj|NKG', '三亚|sanya|sy|SYX', '杭州|hangzhou|hz|HGH', '西安|xian|xa|XIY', '厦门|xiamen|xm|XMN', '武汉|wuhan|wh|WUH', '长沙|changsha|cs|CSX', '成都|chengdu|cd|CTU', '重庆|chongqing|cq|CKG', '青岛|qingdao|qd|TAO', '天津|tianjin|tj|TSN', '大连|dalian|dl|DLC', '海口|haikou|hk|HAK', '南宁|nanning|nn|NNG', '哈尔滨|haerbin|heb|HRB', '海口|haikou|hk|HAK', '福州|fuzhou|fz|FOC', '郑州|zhengzhou|zz|CGO', '昆明|kunming|km|KMG', '乌鲁木齐|wulumuqi|wlmq|URC', '贵阳|guiyang|gy|KWE', '沈阳|shenyang|sy|SHE', '济南|jinan|jn|TNA', '长春|changchun|cc|CGQ', '石家庄|shijiazhuang|sjz|SJW', '太原|taiyuan|ty|TYN', '兰州|lanzhou|lz|LHW', '苏州|suzhou|sz|SZV', '阿勒泰市|aletaishi|alts|AAT', '兴义|xingyi|xy|ACX', '百色|baise|bs|AEB', '安康市|ankangshi|aks|AKA', '合肥|hefei|hf|HFE', '阿克苏市|akesushi|akss|AKU', '鞍山|anshan|as|AOG', '安庆|anqing|aq|AQG', '安顺|anshun|as|AVA', '安阳市|anyangshi|ays|AYN', '包头|baotou|bt|BAV', '蚌埠|bangbu|bb|BFU', '北海|beihai|bh|BHY', '邦达|bangda|bd|BPX', '常德|changde|cd|CGD', '郑州|zhengzhou|zz|CGO', '朝阳|chaoyang|cy|CHG', '酒泉|jiuquan|jq|CHW', '赤峰|chifeng|cf|CIF', '长治|changzhi|cz|CIH', '七美|qimei|qm|CMJ', '长海市|changhaishi|chs|CNI', '嘉义|jiayi|jy|CYI', '常州|changzhou|cz|CZX', '大同|datong|dt|DAT', '达县|daxian|dx|DAX', '丹东|dandong|dd|DDG', '迪庆香格里拉|diqingxianggelila|dqxgll|DIG', '大连|dalian|dl|DLC', '大理|dali|dl|DLU', '敦煌|dunhuang|dh|DNH', '东营市|dongyingshi|dys|DOY', '鄂尔多斯|eerduosi|eeds|DSN', '张家界|zhangjiajie|zjj|DYG', '恩施|enshi|es|ENH', '延安|yanan|ya|ENY', '弗里亚|fuliya|fly|FIG', '阜阳|fuyang|fy|FUG', '佛山|foshan|fs|FUO', '富蕴|fuyun|fy|FYN', '广汉|guanghan|gh|GHN', '格林岛|gelindao|gld|GNI', '戈尔马德|geermade|gemd|GOQ', '广元|guangyuan|gy|GYS', '邯郸|handan|hd|HDG', '黑河|heihe|hh|HEK', '呼和浩特|huhehaote|hhht|HET', '黄花|huanghua|hh|HHA', '怀化|huaihua|hh|HJJ', '海拉尔|hailaer|hle|HLD', '乌兰浩特|wulanhaote|wlht|HLH', '哈米|hami|hm|HMI', '衡阳|hengyang|hy|HNY', '舟山|zhoushan|zs|HSN', '和田|hetian|ht|HTN', '花莲|hualian|hl|HUN', '惠州|huizhou|hz|HUZ', '黄岩|huangyan|hy|HYN', '汉中|hanzhong|hz|HZG', '银川|yinchuan|yc|INC', '且末|qiemo|qm|IQM', '庆阳|qingyang|qy|IQN', '景德镇|jingdezhen|jdz|JDZ', '嘉裕关|jiayuguan|jyg|JGN', '井冈山市|jinggangshanshi|jgss|JGS', '景洪|jinghong|jh|JHG', '吉林|jilin|jl|JIL', '九江|jiujiang|jj|JIU', '晋江|jinjiang|jj|JJN', '佳木斯市|jiamusishi|jmss|JMU', '锦州|jinzhou|jz|JNZ', '衢州|quzhou|qz|JUZ', '九寨黄龙|jiuzhaihuanglong|jzhl|JZH', '库车市|kucheshi|kcs|KCA', '喀什|kashi|ks|KHG', '高雄|gaoxiong|gx|KHH', '南昌|nanchang|nc|KHN', '金门|jinmen|jm|KNH', '赣州|ganzhou|gz|KOW', '库尔勒|kuerle|kel|KRL', '克拉玛依|kelamayi|klmy|KRY', '桂林|guilin|gl|KWL', '奥奇德岛|aoqidedao|aqdd|KYD', '荔波|libo|lb|LBK', '连城市|lianchengshi|lcs|LCX', '梨山|lishan|ls|LHN', '梁平|liangping|lp|LIA', '丽江|lijiang|lj|LJG', '永州|yongzhou|yz|LLF', '临沧市|lincangshi|lcs|LNJ', '德宏芒市|dehongmangshi|dhms|LUM', '拉萨|lasa|ls|LXA', '洛阳|luoyang|ly|LYA', '连云港|lianyungang|lyg|LYG', '临沂|linyi|ly|LYI', '兰州东|lanzhoudong|lzd|LZD', '柳州|liuzhou|lz|LZH', '泸州|zhou|z|LZO', '牡丹江|mudanjiang|mdj|MDG', '绵阳|mianyang|my|MIG', '梅县|meixian|mx|MXZ', '马公|magong|mg|MZG', '南充|nanchong|nc|NAO', '陶公|taogong|tg|NAW', '长白山|changbaishan|cbs|NBS', '宁波|ningbo|nb|NGB', '新源|xinyuan|xy|NLT', '南阳|nanyang|ny|NNY', '南通|nantong|nt|NTG', '满洲|manzhou|mz|NZH', '漠河|mohe|mh|OHE', '攀枝花|panzhihua|pzh|PZI', '台中|taizhong|tz|RMQ', '如皋|rugao|rg|RUG', '山海关|shanhaiguan|shg|SHF', '秦皇岛|qinhuangdao|qhd|SHP', '沙市|shashi|ss|SHS', '西安|xian|xa|SIA', '汕头|shantou|st|SWA', '鄯善|shan|s|SXJ', '思茅|simao|sm|SYM', '剡州|zhou|z|SZO', '塔城|tacheng|tc|TCG', '铜仁|tongren|tr|TEN', '通辽|tongliao|tl|TGO', '通化|tonghua|th|TNH', '黄山|huangshan|hs|TXN', '榆林|yulin|yl|UYN', '潍坊|weifang|wf|WEF', '威海|weihai|wh|WEH', '芜湖|wuhu|wh|WHU', '文山|wenshan|ws|WNH', '温州|wenzhou|wz|WNZ', '乌海市|wuhaishi|whs|WUA', '武夷山|wuyishan|wys|WUS', '无锡市|wuxishi|wxs|WUX', '梧州市|wuzhoushi|wzs|WUZ', '万州|wanzhou|wz|WXN', '兴城|xingcheng|xc|XEN', '襄樊|xiangfan|xf|XFN', '西昌|xichang|xc|XIC', '锡林浩特|xilinhaote|xlht|XIL', '兴宁|xingning|xn|XIN', '西宁|xining|xn|XNN', '徐州|xuzhou|xz|XUZ', '宜宾|yibin|yb|YBP', '运城|yuncheng|yc|YCU', '宜昌|yichang|yc|YIH', '伊宁|yining|yn|YIN', '义乌|yiwu|yw|YIW', '延吉|yanji|yj|YNJ', '烟台|yantai|yt|YNT', '盐城|yancheng|yc|YNZ', '昭通|zhaotong|zt|ZAT', '湛江|zhanjiang|zj|ZHA', '珠海|zhuhai|zh|ZUH', '遵义|zunyi|zy|ZYI'];
var foreign = ['香港|HONG KONG|xianggang|HKG','新加坡|SINGAPORE|xinjiapo|SIN','首尔|SEOUL|shouer|SEL','曼谷|BANGKOK|mangu|BKK','东京|TOKYO|dongjing|TYO','台北|TAIPEI|taibei|TPE','吉隆坡|KUALA LUMPUR|jilongpo|KUL','悉尼|SYDNEY|xini|SYD','纽约|New York|niuyue|NYC','澳门|MACAU|aomen|MFM','伦敦|LONDON|lundun|LON','巴黎|PARIS|bali|PAR','洛杉矶|LOS ANGELES|luoshanji|LAX','马尼拉|Manila|manila|MNL','墨尔本(澳大利亚)|MELBOURNE(AU)|moerben(aodaliya)|MEL','大阪|OSAKA|daban|OSA','胡志明市|HOCHI MINH CITY|huzhimingshi|SGN','温哥华|VANCOUVER|wengehua|YVR','迪拜|DUBAI|dibai|DXB','釜山|PUSAN|fushan|PUS','多伦多|TORONTO|duolunduo|YTO','法兰克福|FRANKFURT|falankefu|FRA','名古屋|NAGOYA|mingguwu|NGO','河内|HANOI|henei|HAN','旧金山(三藩市)|SAN FRANCISCO|jiujinshan|SFO','加德满都|KATHMANDU|jiademandou|KTM','金边|PHNOM PENH|jinbian|PNH','马累|MALE|malei|MLE','莫斯科|Moscow|mosike|MOW','雅加达|Jakarta|yajiada|JKT', '巴厘岛|DENPASAR BALI|balidao|DPS'];

/* 正则表达式 筛选中文城市名、拼音、首字母、三字码 */
IDomestic.regEx = /^([\u4E00-\u9FA5\uf900-\ufa2d]+(?:\(.*\))*)\|(\w+\s*(?:\(.*\))*)+\|(\w)\w*(?:\(.*\))*\|(\w{3})$/i;
IDomestic.regExChiese = /([\u4E00-\u9FA5\uf900-\ufa2d]+)/;

/* *
 * 格式化城市数组为对象oCity，按照a-h,i-p,q-z,hot热门城市分组：
 * {HOT:{hot:[]},ABCDEFGH:{a:[1,2,3],b:[1,2,3]},IJKLMNOP:{i:[1.2.3],j:[1,2,3]},QRSTUVWXYZ:{}}
 * */

(function () {
    var citys = IDomestic.allCity, match, letter, cityName,
        regEx = IDomestic.regEx,
        reg2 = /^[a-h]$/i, reg3 = /^[i-p]$/i, reg4 = /^[q-z]$/i;
    if (!IDomestic.oCity) {
        IDomestic.oCity = {hot:{},ABCDEFGH:{}, IJKLMNOP:{}, QRSTUVWXYZ:{}, foreign:{}};
        /* 国内 */
        for (var i = 0, n = citys.length; i < n; i++) {
            match = regEx.exec(citys[i]);
            letter = match[3].toUpperCase();
            cityName = match[1] + '/' + match[4];
            if (reg2.test(letter)) {
                if (!IDomestic.oCity.ABCDEFGH[letter]) IDomestic.oCity.ABCDEFGH[letter] = [];
                IDomestic.oCity.ABCDEFGH[letter].push(cityName);
            } else if (reg3.test(letter)) {
                if (!IDomestic.oCity.IJKLMNOP[letter]) IDomestic.oCity.IJKLMNOP[letter] = [];
                IDomestic.oCity.IJKLMNOP[letter].push(cityName);
            } else if (reg4.test(letter)) {
                if (!IDomestic.oCity.QRSTUVWXYZ[letter]) IDomestic.oCity.QRSTUVWXYZ[letter] = [];
                IDomestic.oCity.QRSTUVWXYZ[letter].push(cityName);
            }
            //console.log(reg2.test(letter));
            /* 热门城市 前30条 */
            if(i<30){
                if(!IDomestic.oCity.hot['hot']) IDomestic.oCity.hot['hot'] = [];
                IDomestic.oCity.hot['hot'].push(cityName);
            }
        }
        /* 国际·港澳台 */
        for (var i = 0, n = foreign.length; i < n; i++) {
        	match = regEx.exec(foreign[i]);
            cityName = match[1] + '/' + match[4];
            if(!IDomestic.oCity.foreign['foreign']) IDomestic.oCity.foreign['foreign'] = [];
            IDomestic.oCity.foreign['foreign'].push(cityName);
        }
    }
})();
/* 城市HTML模板 */
IDomestic._template = [
    '<p class="tip">热门城市(支持汉字/拼音/城市名缩写/城市三字码)</p>',
    '<ul>',
    '<li class="on">热门城市</li>',
    '<li>ABCDEFGH</li>',
    '<li>IJKLMNOP</li>',
    '<li>QRSTUVWXYZ</li>',
    '<li>国际·港澳台</li>',
    '</ul>'
];

/* *
 * 城市控件构造函数
 * @CitySelector
 * */

IDomestic.CitySelector = function () {
    this.initialize.apply(this, arguments);
};

IDomestic.CitySelector.prototype = {

    constructor:IDomestic.CitySelector,

    /* 初始化 */
    initialize :function (options) {
        if(typeof options.callback == 'function') {
            this.callback = options.callback;
        }
        var input = options.input;
        this.input = IDomestic._m.$('#'+ input);
        this.inputEvent();
    },

    /* *
     * @createWarp
     * 创建城市BOX HTML 框架
     * */

    createWarp:function(){
        var inputPos = IDomestic._m.getPos(this.input);
        var div = this.rootDiv = document.createElement('div');
        var that = this;

        // 设置DIV阻止冒泡
        IDomestic._m.on(this.rootDiv,'click',function(event){
            IDomestic._m.stopPropagation(event);
        });

        // 设置点击文档隐藏弹出的城市选择框
        IDomestic._m.on(document, 'click', function (event) {
            event = IDomestic._m.getEvent(event);
            var target = IDomestic._m.getTarget(event);
            if(target == that.input) return false;
            //console.log(target.className);
            if (that.cityBox)IDomestic._m.addClass('hide', that.cityBox);
            if (that.ul)IDomestic._m.addClass('hide', that.ul);
            if(that.myIframe)IDomestic._m.addClass('hide',that.myIframe);
        });
        div.className = 'citySelector';
        div.style.position = 'absolute';
        div.style.left = inputPos.left + 'px';
        div.style.top = inputPos.bottom + 'px';
        div.style.zIndex = 999999;

        // 判断是否IE6，如果是IE6需要添加iframe才能遮住SELECT框
        var isIe = (document.all) ? true : false;
        var isIE6 = this.isIE6 = isIe && !window.XMLHttpRequest;
        if(isIE6){
            var myIframe = this.myIframe =  document.createElement('iframe');
            myIframe.frameborder = '0';
            myIframe.src = 'about:blank';
            myIframe.style.position = 'absolute';
            myIframe.style.zIndex = '-1';
            this.rootDiv.appendChild(this.myIframe);
        }

        var childdiv = this.cityBox = document.createElement('div');
        childdiv.className = 'cityBox';
        childdiv.id = 'cityBox';
        childdiv.innerHTML = IDomestic._template.join('');
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
        var odiv,odl,odt,odd,odda=[],str,key,ckey,sortKey,regEx = IDomestic.regEx,cityArr,
            oCity = IDomestic.oCity;
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
                odt.innerHTML = (sortKey[j] == 'hot' || sortKey[j] == 'foreign') ?'&nbsp;':sortKey[j];
                odda = [];
                for(var i=0,n=oCity[key][sortKey[j]].length;i<n;i++){
                	cityArr = oCity[key][sortKey[j]][i].split('/');
                    str = '<a href="javascript:void(0)" code="' + cityArr[1] + '" title="' + cityArr[0] + '">' + cityArr[0] + '</a>';
                    odda.push(str);
                }
                odd.innerHTML = odda.join('');
                odl.appendChild(odt);
                odl.appendChild(odd);
                odiv.appendChild(odl);
            }

            // 移除热门城市的隐藏CSS
            IDomestic._m.removeClass('hide',this.hot);
            this.hotCity.appendChild(odiv);
        }
        document.body.appendChild(this.rootDiv);
        /* IE6 */
        this.changeIframe();

        this.tabChange();
        this.linkEvent();
    },

    /* *
     *  tab按字母顺序切换
     *  @ tabChange
     * */

    tabChange:function(){
        var lis = IDomestic._m.$('li',this.cityBox);
        var divs = IDomestic._m.$('div',this.hotCity);
        var that = this;
        for(var i=0,n=lis.length;i<n;i++){
            lis[i].index = i;
            lis[i].onclick = function(){
                for(var j=0;j<n;j++){
                    IDomestic._m.removeClass('on',lis[j]);
                    IDomestic._m.addClass('hide',divs[j]);
                }
                IDomestic._m.addClass('on',this);
                IDomestic._m.removeClass('hide',divs[this.index]);
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
        var links = IDomestic._m.$('a',this.hotCity);
        var that = this;
        for(var i=0,n=links.length;i<n;i++){
            links[i].onclick = function(){
            	that.input.setAttribute('code', this.getAttribute('code'));
                that.input.value = this.innerHTML;
                that.callback  && that.callback(this.innerHTML);
                IDomestic._m.addClass('hide',that.cityBox);
                /* 点击城市名的时候隐藏myIframe */
                IDomestic._m.addClass('hide',that.myIframe);
            }
        }
    },

    /* *
     * INPUT城市输入框事件
     * @inputEvent
     * */

    inputEvent:function(){
        var that = this;
        IDomestic._m.on(this.input,'click',function(event){
            event = event || window.event;
            if(!that.cityBox){
                that.createWarp();
            }else if(!!that.cityBox && IDomestic._m.hasClass('hide',that.cityBox)){
                // slideul 不存在或者 slideul存在但是是隐藏的时候 两者不能共存
                if(!that.ul || (that.ul && IDomestic._m.hasClass('hide',that.ul))){
                    IDomestic._m.removeClass('hide',that.cityBox);

                    /* IE6 移除iframe 的hide 样式 */
                    //alert('click');
                    IDomestic._m.removeClass('hide',that.myIframe);
                    that.changeIframe();
                }
            }
        });
        IDomestic._m.on(this.input,'focus',function(){
            that.input.select();
            //if(that.input.value == '城市名') that.input.value = '';
        });
        IDomestic._m.on(this.input,'blur',function(){
        	if(that.input.value != ''){
                var searchResult = [];
                var city = [];
                for (var i = 0, n = IDomestic.allCity.length; i < n; i++) {
                	city = IDomestic.allCity[i].split("|");
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
        IDomestic._m.on(this.input,'keyup',function(event){
            event = event || window.event;
            var keycode = event.keyCode;
            IDomestic._m.addClass('hide',that.cityBox);
            that.createUl();

            /* 移除iframe 的hide 样式 */
            IDomestic._m.removeClass('hide',that.myIframe);

            // 下拉菜单显示的时候捕捉按键事件
            if(that.ul && !IDomestic._m.hasClass('hide',that.ul) && !that.isEmpty){
                that.KeyboardEvent(event,keycode);
            }
        });
    },

    /* *
     * 生成下拉选择列表
     * @ createUl
     * */

    createUl:function () {
        //console.log('createUL');
        var str;
        var value = IDomestic._m.trim(this.input.value);
        // 当value不等于空的时候执行
        if (value !== '') {
            var reg = new RegExp("^" + value + "|\\|" + value, 'gi');
            var searchResult = [];
            for (var i = 0, n = IDomestic.allCity.length; i < n; i++) {
                if (reg.test(IDomestic.allCity[i])) {
                    var match = IDomestic.regEx.exec(IDomestic.allCity[i]);
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
                str = '<li class="empty">抱歉，没有找到数据 "<em>' + value + '</em>"</li>';
                searchResult.push(str);
            }
            // 如果slideul不存在则添加ul
            if (!this.ul) {
                var ul = this.ul = document.createElement('ul');
                ul.className = 'cityslide';
                this.rootDiv && this.rootDiv.appendChild(ul);
                // 记录按键次数，方向键
                this.count = 0;
            } else if (this.ul && IDomestic._m.hasClass('hide', this.ul)) {
                this.count = 0;
                IDomestic._m.removeClass('hide', this.ul);
            }
            this.ul.innerHTML = searchResult.join('');

            /* IE6 */
            this.changeIframe();

            // 绑定Li事件
            this.liEvent();
        }else{
            IDomestic._m.addClass('hide',this.ul);
            IDomestic._m.removeClass('hide',this.cityBox);

            IDomestic._m.removeClass('hide',this.myIframe);

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
        var lis = IDomestic._m.$('li',this.ul);
        var len = lis.length;
        switch(keycode){
            case 40: //向下箭头↓
                this.count++;
                if(this.count > len-1) this.count = 0;
                for(var i=0;i<len;i++){
                    IDomestic._m.removeClass('on',lis[i]);
                }
                IDomestic._m.addClass('on',lis[this.count]);
                break;
            case 38: //向上箭头↑
                this.count--;
                if(this.count<0) this.count = len-1;
                for(i=0;i<len;i++){
                    IDomestic._m.removeClass('on',lis[i]);
                }
                IDomestic._m.addClass('on',lis[this.count]);
                break;
            case 13: // enter键
            	this.input.setAttribute('code', lis[this.count].firstChild.getAttribute('code'));
                this.input.value = IDomestic.regExChiese.exec(lis[this.count].innerHTML)[0];
                this.callback  && this.callback(this.input.value);
                IDomestic._m.addClass('hide',this.ul);
                IDomestic._m.addClass('hide',this.ul);
                /* IE6 */
                IDomestic._m.addClass('hide',this.myIframe);
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
        var lis = IDomestic._m.$('li',this.ul);
        for(var i = 0,n = lis.length;i < n;i++){
            IDomestic._m.on(lis[i],'click',function(event){
                event = IDomestic._m.getEvent(event);
                var target = IDomestic._m.getTarget(event);
                that.input.value = IDomestic.regExChiese.exec(target.innerHTML)[0];
                that.input.setAttribute('code', target.firstChild.getAttribute('code'));
                that.callback  && that.callback(that.input.value);
                IDomestic._m.addClass('hide',that.ul);
                /* IE6 下拉菜单点击事件 */
                IDomestic._m.addClass('hide',that.myIframe);
            });
            IDomestic._m.on(lis[i],'mouseover',function(event){
                event = IDomestic._m.getEvent(event);
                var target = IDomestic._m.getTarget(event);
                IDomestic._m.addClass('on',target);
            });
            IDomestic._m.on(lis[i],'mouseout',function(event){
                event = IDomestic._m.getEvent(event);
                var target = IDomestic._m.getTarget(event);
                IDomestic._m.removeClass('on',target);
            })
        }
    }
};