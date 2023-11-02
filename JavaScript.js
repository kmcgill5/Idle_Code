/*************************Variables and Updates**************************/
//Money
const FORMATTER = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits: 0});
let money = 0;
function updateMoney(cash) {
    money = cash;
    document.getElementById('money').innerHTML = FORMATTER.format(money);
}
//Statistics
let chars = 0;
let files = 0;
let tMoney = 0;
function updateStats() {
    document.getElementById('chars').innerHTML = chars;
    document.getElementById('files').innerHTML = files;
    document.getElementById('tMoney').innerHTML = FORMATTER.format(tMoney);
    if (files == 1)
        document.getElementById('skill').innerHTML = "Beginner";
    else if (files == 3)
        document.getElementById('skill').innerHTML = "Novice";
    else if (files == 5)
        document.getElementById('skill').innerHTML = "Professional";
}

/****************************Code Being Typed****************************/
//HTML
const browserHTML = "<!DOCTYPE html>\n" +
           "<html lang=\"en-US\">\n" +
           "    <head>\n" +
           "        <meta charset=\"UTF-8\">\n" +
           "        <title>Boom!</title>\n" +
           "        <link rel=\"icon\"  type=\"image/x-icon\" href=\"img/swan.jpg\">\n" +
           "        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
           "        <link rel=\"stylesheet\" href=\"Style.css\">\n" +
           "    </head>\n" +
           "    <body>\n" +
           "        <h1 id=\"demo\">My First JavaScript</h1>\n" +
           "        <p id=\"lorem\">lorem ipsum...</p>\n" +
           "        <div id=\"test\">Hello, World!</div>\n" +
           "        <div class=\"math\">\n" +
           "            <h2>Math</h2>\n" +
           "            <p>Math can be fun, <span>but it can also be maddening</span>. Math is unique in this regard. I don't personally know many people that like math. I prefer programming, but even programming uses lots of mathematics.</p>\n" +
           "        </div>\n" +
           "        <img src=\"img/temple.jpg\"></img>\n" +
           "        <br>\n" +
           "        <table>\n" +
           "            <tr>\n" +
           "                <th>Name</th>\n" +
           "                <th>Shirt Color</th>\n" +
           "                <th>Age</th>\n" +
           "            </tr>\n" +
           "            <tr>\n" +
           "                <td>Person 1</td>\n" +
           "                <td>Blue</td>\n" +
           "                <td>41</td>\n" +
           "            </tr>\n" +
           "            <tr>\n" +
           "                <td>Person 2</td>\n" +
           "                <td>Pink</td>\n" +
           "                <td>53</td>\n" +
           "            </tr>\n" +
           "            <tr>\n" +
           "                <td>Person 3</td>\n" +
           "                <td>Green</td>\n" +
           "                <td>24</td>\n" +
           "            </tr>\n" +
           "        </table>\n" +
           "        <ul>\n" +
           "            <li><a href=\"https://www.google.com\" target=\"_blank\">Home</a></li>\n" +
           "            <li><a href=\"#news\">News</a></li>\n" +
           "            <li><a href=\"#contact\">Contact</a></li>\n" +
           "            <li><a href=\"#about\">About</a></li>\n" +
           "        </ul>\n" +
           "        <ol>\n" +
           "            <li>Lasagna</li>\n" +
           "            <ol>\n" +
           "                <li type=\"A\">Spaghetti</li>\n" +
           "                <ol>\n" +
           "                    <li type=\"I\">Penne</li>\n" +
           "                    <ol>\n" +
           "                        <li type=\"a\">Rotini</li>\n" +
           "                        <ol>\n" +
           "                            <li type=\"i\">Ravioli</li>\n" +
           "                        </ol>\n" +
           "                    </ol>\n" +
           "                </ol>\n" +
           "            </ol>\n" +
           "        </ol>\n" +
           "        <dl>\n" +
           "            <dt type=\"I\">Water</dt>\n" +
           "            <dd>- cold blue</dd>\n" +
           "            <dt>Hot Cocoa</dt>\n" +
           "            <dd>- hot brown</dd>\n" +
           "        </dl>\n" +
           "        <script src=\"JavaScript.js\"></script>\n" +
           "    </body>\n" +
           "</html>";
const idleHTML = "<!DOCTYPE HTML>\n" +
           "<html lang=\"en-US\">\n" +
           "    <head>\n" +
           "        <meta charset=\"UTF-8\">\n" +
           "        <title>Idle Code</title>\n" +
           "        <link rel=\"icon\" type=\"image/x-icon\" href=\"images/Favicon.png\">\n" +
           "        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
           "        <link rel=\"stylesheet\" href=\"Styles.css\">\n" +
           "    </head>\n" +
           "    <body>\n" +
           "        <div class=\"leftpane\">\n" +
           "            <h1>Menu</h1>\n" +
           "            <ul>\n" +
           "                <li>\n" +
           "                    <button type=\"button\" id=\"home_button\">Home</button>\n" +
           "                </li>\n" +
           "                <li>\n" +
           "                    <button type=\"button\" id=\"info_button\">Info</button>\n" +
           "                </li>\n" +
           "                <li>\n" +
           "                    <button type=\"button\" id=\"achieve_button\">Achievements</button>\n" +
           "                </li>\n" +
           "                <li>\n" +
           "                    <button type=\"button\" id=\"html_button\">HTML</button>\n" +
           "                </li>\n" +
           "                <li>\n" +
           "                    <button type=\"button\" id=\"css_button\">CSS</button>\n" +
           "                </li>\n" +
           "                <li>\n" +
           "                    <button type=\"button\" id=\"js_button\">JS</button>\n" +
           "                </li>\n" +
           "                <li>\n" +
           "                    <button type=\"button\" id=\"python_button\">Python</button>\n" +
           "                </li>\n" +
           "                <li>\n" +
           "                    <button type=\"button\" id=\"java_button\">Java</button>\n" +
           "                </li>\n" +
           "                <li>\n" +
           "                    <button type=\"button\" id=\"batch_button\">Batch</button>\n" +
           "                </li>\n" +
           "            </ul>\n" +
           "            <div class=\"menus\">\n" +
           "                <img id=\"hKeyboard\" alt=\"\" src=\"images/Keyboard.png\">\n" +
           "                <div id=\"home\">\n" +
           "                    <h2 id=\"header\">Home</h2>\n" +
           "                    <p>Characters Typed: <span id=\"chars\">0</span></p>\n" +
           "                    <p>Files Typed: <span id=\"files\">0</span></p>\n" +
           "                    <p>Total Money: <span id=\"tMoney\">$0</span></p>\n" +
           "                </div>\n" +
           "                <div id=\"info\">\n" +
           "                    <h2>Information</h2>\n" +
           "                    <p>Idle code was created to spark an interest in programming.</p>\n" +
           "                    <p>I am continuing to add programs in different languages. This includes Windows Batch Script. Even though it is not a language, it is a great way to handle tasks and uses commands similar to those used in other languages.</p>\n" +
           "                    <p>You are encouraged to execute all the code you type and gain a better understanding of each language and its methods.</p>\n" +
           "                    <p>Many of the HTML, CSS, and JavaScript programs are meant to run together. However, not all of the HTML and JS compliment each other.</p>\n" +
           "                    <p>I hope you enjoy programming your life away!</p>\n" +
           "                </div>\n" +
           "                <div id=\"achieve\">\n" +
           "                    <h2>Achievements</h2>\n" +
           "                    <img id=\"coins\" alt=\"Image of coins.\" src=\"\">\n" +
           "                    <p>Make $1,000.</p>\n" +
           "                    <p>Make $1,000,000</p>\n" +
           "                    <p>Make $1,000,000,000</p>\n" +
           "                    <img id=\"characters\" alt=\"Image of characters.\" src=\"\">\n" +
           "                    <p>Type 100 characters</p>\n" +
           "                    <p>Type 1,000 characters</p>\n" +
           "                    <p>Type 10,000 characters</p>\n" +
           "                    <img id=\"html_code\" alt=\"Image of HTML\" src=\"\">\n" +
           "                    <p>Write an HTML file</p>\n" +
           "                    <p>Write all the HTML files</p>\n" +
           "                    <br>\n" +
           "                    <img id=\"css_code\" alt=\"Image of CSS\" src=\"\">\n" +
           "                    <p>Write a CSS file</p>\n" +
           "                    <br>\n" +
           "                    <br>\n" +
           "                    <h5>Hidden Components</h5>\n" +
           "                    <img id=\"speaker\" alt=\"\" src=\"\">\n" +
           "                    <img id=\"monitor\" alt=\"\" src=\"\">\n" +
           "                    <img id=\"tower\" alt=\"\" src=\"\">\n" +
           "                    <p>Monitor</p>\n" +
           "                    <p>Tower</p>\n" +
           "                    <p>Keyboard</p>\n" +
           "                    <img id=\"keyboard\" alt=\"\" src=\"\">\n" +
           "                    <p>Mouse</p>\n" +
           "                    <img id=\"mouse\" alt=\"\" src=\"\">\n" +
           "                    <p>Speaker</p>\n" +
           "                </div>\n" +
           "                <div id=\"html\">\n" +
           "                    <h2>Hypertext Markup Language</h2>\n" +
           "                    <button type=\"button\" id=\"browserHTML\">HTML</button>\n" +
           "                    <button type=\"button\" id=\"idleHTML\">Idle Code</button>\n" +
           "                </div>\n" +
           "                <div id=\"css\">\n" +
           "                    <h2>Cascading Style Sheets</h2>\n" +
           "                    <button type=\"button\" id=\"styleCSS\">CSS</button>\n" +
           "                </div>\n" +
           "                <div id=\"js\">\n" +
           "                    <h2>JavaScript</h2>\n" +
           "                    <p>Coming Soon!</p>\n" +
           "                </div>\n" +
           "                <div id=\"python\">\n" +
           "                    <h2>Python</h2>\n" +
           "                    <p>Coming Soon!</p>\n" +
           "                </div>\n" +
           "                <div id=\"java\">\n" +
           "                    <h2>Java</h2>\n" +
           "                    <p>Coming Soon!</p>\n" +
           "                </div>\n" +
           "                <div id=\"batch\">\n" +
           "                    <h2>Batch Script</h2>\n" +
           "                    <p>Coming Soon!</p>\n" +
           "                </div>\n" +
           "            </div>\n" +
           "        </div>\n" +
           "        <div class=\"middlepane\">\n" +
           "            <div class=\"head\">\n" +
           "                <div class=\"money\">\n" +
           "                    <h3>Money</h3>\n" +
           "                    <h3 id=\"money\">$0</h3>\n" +
           "                </div>\n" +
           "                <div class=\"rank\">\n" +
           "                    <h3 id=\"skill\">Script Kiddie</h3>\n" +
           "                    <h3>Programmer</h3>\n" +
           "                </div>\n" +
           "                <img id=\"hTower\" alt=\"\" src=\"images/Tower.png\">\n" +
           "            </div>\n" +
           "            <div>\n" +
           "                <div class=\"box\">\n" +
           "                    <label for=\"box\"></label>\n" +
           "                    <textarea id=\"box\" type=\"text\" title=\"box\" placeholder=\" \" wrap=\"off\" readonly></textarea>\n" +
           "                </div>\n" +
           "                <div class=\"textbox\">\n" +
           "                    <label for=\"textbox\"></label>\n" +
           "                    <textarea id=\"textbox\" type=\"text\" title=\"textbox\" placeholder=\" \" wrap=\"off\" autocorrect=\"off\" autocapitalize=\"none\" spellcheck=\"false\" multiple></textarea>\n" +
           "                </div>\n" +
           "            </div>\n" +
           "            <img id=\"hMonitor\" alt=\"\" src=\"images/Monitor.png\">\n" +
           "        </div>\n" +
           "        <div class=\"rightpane\">\n" +
           "            <h1>Shop</h1>\n" +
           "            <img id=\"hSpeaker\" alt=\"\" src=\"images/Speaker.png\">\n" +
           "            <div class=\"shop\">\n" +
           "                <button type=\"button\" id=\"programmer\">\n" +
           "                    <span id=\"pAmount\" class=\"amount\">0</span>\n" +
           "                    <span class=\"item\">Programmer</span>\n" +
           "                    <span id=\"pCost\" class=\"cost\">$50</span>\n" +
           "                </button>\n" +
           "                <button type=\"button\" id=\"ai\">\n" +
           "                    <span id=\"aAmount\" class=\"amount\">0</span>\n" +
           "                    <span class=\"item\">AI</span>\n" +
           "                    <span id=\"aCost\" class=\"cost\">$500</span>\n" +
           "                </button>\n" +
           "                <button type=\"button\" id=\"server\">\n" +
           "                    <span id=\"sAmount\" class=\"amount\">0</span>\n" +
           "                    <span class=\"item\">Server</span>\n" +
           "                    <span id=\"sCost\" class=\"cost\">$2,500</span>\n" +
           "                </button>\n" +
           "                <button type=\"button\" id=\"mainframe\">\n" +
           "                    <span id=\"mAmount\" class=\"amount\">0</span>\n" +
           "                    <span class=\"item\">Mainframe</span>\n" +
           "                    <span id=\"mCost\" class=\"cost\">$10,000</span>\n" +
           "                </button>\n" +
           "                <button type=\"button\" id=\"super_computer\">\n" +
           "                    <span id=\"scAmount\" class=\"amount\">0</span>\n" +
           "                    <span class=\"item\">Supercomputer</span>\n" +
           "                    <span id=\"scCost\" class=\"cost\">$100,000</span>\n" +
           "                </button>\n" +
           "                <button type=\"button\" id=\"quantum\">\n" +
           "                    <span id=\"qAmount\" class=\"amount\">0</span>\n" +
           "                    <span class=\"item\">Quantum Computer</span>\n" +
           "                    <span id=\"qCost\" class=\"cost\">$1,000,000</span>\n" +
           "                </button>\n" +
           "            </div>\n" +
           "            <div class=\"descriptions\">\n" +
           "                <div class=\"pDescription\">\n" +
           "                    <h4>Programmer</h4>\n" +
           "                    <p id=\"pEarn\">$5</p>\n" +
           "                    <p id=\"pEarning\">$0</p>\n" +
           "                    <br>\n" +
           "                    <br>\n" +
           "                    <span>HTML: complete a set of tags</span>\n" +
           "                    <span>CSS:  complete a heading</span>\n" +
           "                </div>\n" +
           "                <div class=\"aDescription\">\n" +
           "                    <h4>AI</h4>\n" +
           "                    <p id=\"aEarn\">$20</p>\n" +
           "                    <p id=\"aEarning\">$0</p>\n" +
           "                    <br>\n" +
           "                    <br>\n" +
           "                    <span>HTML: complete a set of double quotes</span>\n" +
           "                    <span>CSS:  type any number</span>\n" +
           "                </div>\n" +
           "                <div class=\"sDescription\">\n" +
           "                    <h4>Server</h4>\n" +
           "                    <p id=\"sEarn\">$100</p>\n" +
           "                    <p id=\"sEarning\">$0</p>\n" +
           "                    <br>\n" +
           "                    <br>\n" +
           "                    <span>HTML: use the carriage return</span>\n" +
           "                    <span>CSS: type a colon</span>\n" +
           "                </div>\n" +
           "                <div class=\"mDescription\">\n" +
           "                    <h4>Mainframe</h4>\n" +
           "                    <p id=\"mEarn\">$250</p>\n" +
           "                    <p id=\"mEarning\">$0</p>\n" +
           "                    <br>\n" +
           "                    <br>\n" +
           "                    <span>HTML: complete a tag</span>\n" +
           "                    <span>CSS: use the carriage return</span>\n" +
           "                </div>\n" +
           "                <div class=\"scDescription\">\n" +
           "                    <h4>Supercomputer</h4>\n" +
           "                    <p id=\"scEarn\">$500</p>\n" +
           "                    <p id=\"scEarning\">$0</p>\n" +
           "                    <br>\n" +
           "                    <br>\n" +
           "                    <span>Earn money every time you type a character</span>\n" +
           "                </div>\n" +
           "                <div class=\"qDescription\">\n" +
           "                    <h4>Quantum Computer</h4>\n" +
           "                    <p id=\"qEarn\">$3,000</p>\n" +
           "                    <p id=\"qEarning\">$0</p>\n" +
           "                    <br>\n" +
           "                    <br>\n" +
           "                    <span>Earn money every second</span>\n" +
           "                    <img id=\"hMouse\" alt=\"\" src=\"images/Mouse.png\">\n" +
           "                </div>\n" +
           "            </div>\n" +
           "        </div>\n" +
           "        <script src=\"JavaScript.js\"></script>\n" +
           "    </body>\n" +
           "</html>";
//CSS
const styleCSS = "body {\n" +
           "    background-color: blue;\n" +
           "    color: white;\n" +
           "}\n" +
           "h1 {\n" +
           "    font-size: 300%;\n" +
           "    background-color: lightgreen;\n" +
           "    border: solid tomato;\n" +
           "}\n" +
           ".math {\n" +
           "    background-color: purple;\n" +
           "    padding: 10px;\n" +
           "}\n" +
           "#lorem {\n" +
           "    font-size: 200%;\n" +
           "}\n" +
           "span {\n" +
           "    color: black;\n" +
           "    font-weight: bold;\n" +
           "}\n" +
           "ul {\n" +
           "    list-style-type: none;\n" +
           "    margin: 0;\n" +
           "    padding: 0;\n" +
           "    overflow: hidden;\n" +
           "    background-color: green;\n" +
           "}\n" +
           "ul li {\n" +
           "   float: left;\n" +
           "}\n" +
           "li a {\n" +
           "     display: block;\n" +
           "    color: white;\n" +
           "    text-align: center;\n" +
           "    padding: 16px;\n" +
           "    text-decoration: none;\n" +
           "    target: _blank;\n" +
           "}\n" +
           "li a:hover {\n" +
           "    background-color: brown;\n" +
           "}\n" +
           "table, th, td {\n" +
           "    border: 1px solid white;\n" +
           "    border-collapse: collapse;\n" +
           "}\n" +
           "td, th {\n" +
           "    padding: 5px;\n" +
           "}";

/***************************Programming Window***************************/
//Scroll
const box = document.getElementById('box');
const textbox = document.getElementById('textbox');
box.addEventListener('scroll', (e) => {
    if (box.scrollTop > 0)
        box.style.width = "calc(100% - 18px)";
    if (box.scrollLeft > 0)
        box.style.height = "calc(83.4% - 18px)";
});
textbox.addEventListener('scroll', (e) => {
    box.scrollTop = textbox.scrollTop;
    box.scrollLeft = textbox.scrollLeft;
});
function resize() {
    box.style.width = "100%";
    box.style.height = "83.4%";
}
//Event Listeners
document.getElementById('textbox').addEventListener("keypress", (e) => { key = event.key; });
document.getElementById('textbox').addEventListener("input", (e) => { analyze(); });
document.getElementById('browserHTML').addEventListener("click", (e) => { open("browser", "html"); resize(); });
document.getElementById('idleHTML').addEventListener("click", (e) => { open("idle code", "html"); resize(); });
document.getElementById('styleCSS').addEventListener("click", (e) => { open("style", "css"); resize(); });
//Windows
let completeBrowser = false;
let completeIdle = false;
let completeStyle = false;
let type = "";
/*function openHTML() {
    const xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (xml.readyState == 4 && xml.staus == 200) {
            document.getElementById('box').innerHTML = xml.responseText;
        }
    };
    xml.open("GET", "/programs/Browser.html?t=" + Math.random(), true);
    xml.send();
}*/
function open(file, extension) {
    if (extension == "html") {
        if (file == "browser")
            box.innerHTML = browserHTML;
        else if (file == "idle code")
            box.innerHTML = idleHTML;
    }
    else if (extension == "css") {
        if (file == "style")
            box.innerHTML = styleCSS;
    }
    type = extension;
    textbox.value = "";
    index = 0;
}
//Earnings
setInterval(quantumEarn, 1000);
let earnings = 1;
let index = 0;
let key = "";
let slash = false;
let quote = false;
let lessThan = false;
function analyze() {
    if (box.value != "") {
        if (textbox.value.substring(index, index + 1) == box.value.substring(index, index + 1)) {
            let oldMoney = money;
            earn();
            index++;
            tMoney += money - oldMoney;
            if (key != "Enter")
                chars++;
            if (textbox.value.length == box.value.length) {
                if (type == "html") {
                    if (box.value == browserHTML)
                        completeBrowser = true;
                    else if (box.value == idleHTML)
                        completeIdle = true;
                }
                else if (type == "css") {
                    if (box.value == styleCSS)
                        completeStyle = true;
                }
                files++;
            }
        }
        updateStats();
        checkAchieves();
        textbox.value.substring(index - 1);
    }
}
function earn() {
    earnings = 1;
    if (type == "html")
        earnHTML();
    else if (type == "css")
        earnCSS();
    if (Supercomputer.amount > 0)
        earnings += Supercomputer.amount * Supercomputer.earning;
    updateMoney(money + earnings);
}
function earnHTML() {
    if (Programmer.amount > 0) {
        if (key == "/")
            slash = true;
        else if (slash && key == ">") {
            slash = false;
            earnings += Programmer.amount * Programmer.earning;
        }
    }
    if (AI.amount > 0 && key == "\"") {
        if (!quote)
            quote = true;
        else {
            quote = false;
            earnings += AI.amount * AI.earning;
        }
    }
    if (Server.amount > 0 && key == "Enter")
        earnings += Server.amount * Server.earning;
    if (Mainframe.amount > 0) {
        if (key == "<")
            lessThan = true;
        else if (lessThan && key == ">") {
            lessThan = false;
            earnings += Mainframe.amount * Mainframe.earning;
        }
    }
}
function earnCSS() {
    if (Programmer.amount > 0 && key == "{")
        earnings += Programmer.amount * Programmer.earning;
    if (AI.amount > 0 && ["0","1","2","3","4","5","6","7","8","9"].indexOf(key) != -1)
        earnings += AI.amount * AI.earning;
    if (Server.amount > 0 && key == ":")
        earnings += Server.amount * Server.earning;
    if (Mainframe.amount > 0 && key == "Enter")
        earnings += Mainframe.amount * Mainframe.earning;
}
function quantumEarn() {
    updateMoney(money + (Quantum.amount * Quantum.earning))
}

/*********************************Shop***********************************/
//Event Listeners
document.getElementById('programmer').addEventListener("mouseover", (e) => { display("pDescription"); });
document.getElementById('programmer').addEventListener("mouseout", (e) => { hide("pDescription"); });
document.getElementById('programmer').addEventListener("click", (e) => { purchase(Programmer); });
document.getElementById('ai').addEventListener("mouseover", (e) => { display("aDescription"); });
document.getElementById('ai').addEventListener("mouseout", (e) => { hide("aDescription"); });
document.getElementById('ai').addEventListener("click", (e) => { purchase(AI); });
document.getElementById('server').addEventListener("mouseover", (e) => { display("sDescription"); });
document.getElementById('server').addEventListener("mouseout", (e) => { hide("sDescription"); });
document.getElementById('server').addEventListener("click", (e) => { purchase(Server); });
document.getElementById('mainframe').addEventListener("mouseover", (e) => { display("mDescription"); });
document.getElementById('mainframe').addEventListener("mouseout", (e) => { hide("mDescription"); });
document.getElementById('mainframe').addEventListener("click", (e) => { purchase(Mainframe); });
document.getElementById('super_computer').addEventListener("mouseover", (e) => { display("scDescription"); });
document.getElementById('super_computer').addEventListener("mouseout", (e) => { hide("scDescription"); });
document.getElementById('super_computer').addEventListener("click", (e) => { purchase(Supercomputer); });
document.getElementById('quantum_computer').addEventListener("mouseover", (e) => { display("qDescription"); });
document.getElementById('quantum_computer').addEventListener("mouseout", (e) => { hide("qDescription"); });
document.getElementById('quantum_computer').addEventListener("click", (e) => { purchase(Quantum); });
//Purchases
let Programmer = {
    cost: 50,
    amount: 0,
    earning: 5,
    update: function () {
        document.getElementById('pAmount').innerHTML = this.amount;
        document.getElementById('pCost').innerHTML = FORMATTER.format(this.cost);
        document.getElementById('pEarning').innerHTML = FORMATTER.format(this.earning * this.amount);
    }
}
let AI = {
    cost: 500,
    amount: 0,
    earning: 20,
    update: function () {
        document.getElementById('aAmount').innerHTML = this.amount;
        document.getElementById('aCost').innerHTML = FORMATTER.format(this.cost);
        document.getElementById('aEarning').innerHTML = FORMATTER.format(this.earning * this.amount);
    }
}
let Server = {
    cost: 2500,
    amount: 0,
    earning: 100,
    update: function () {
        document.getElementById('sAmount').innerHTML = this.amount;
        document.getElementById('sCost').innerHTML = FORMATTER.format(this.cost);
        document.getElementById('sEarning').innerHTML = FORMATTER.format(this.earning * this.amount);
    }
}
let Mainframe = {
    cost: 10000,
    amount: 0,
    earning: 250,
    update: function () {
        document.getElementById('mAmount').innerHTML = this.amount;
        document.getElementById('mCost').innerHTML = FORMATTER.format(this.cost);
        document.getElementById('mEarning').innerHTML = FORMATTER.format(this.earning * this.amount);
    }
}
let Supercomputer = {
    cost: 100000,
    amount: 0,
    earning: 500,
    update: function () {
        document.getElementById('scAmount').innerHTML = this.amount;
        document.getElementById('scCost').innerHTML = FORMATTER.format(this.cost);
        document.getElementById('scEarning').innerHTML = FORMATTER.format(this.earning * this.amount);
    }
}
let Quantum = {
    cost: 1000000,
    amount: 0,
    earning: 3000,
    update: function () {
        document.getElementById('qAmount').innerHTML = this.amount;
        document.getElementById('qCost').innerHTML = FORMATTER.format(this.cost);
        document.getElementById('qEarning').innerHTML = FORMATTER.format(this.earning * this.amount);
    }
}
function purchase(item) {
    if (money >= item.cost) {
        money -= item.cost;
        item.amount++;
        item.cost += Math.round(0.1 * item.cost);
        item.update();
        updateMoney(money);
    }
}

/******************************Descriptions******************************/
//Description Boxes
function display(name) {
    for (let element of document.getElementsByClassName('descriptions'))
        element.style.visibility = "visible";
        for (let element of document.getElementsByClassName(name))
        element.style.visibility = "visible";
}
function hide(name) {
    for (let element of document.getElementsByClassName('descriptions'))
        element.style.visibility = "hidden";
        for (let element of document.getElementsByClassName(name))
        element.style.visibility = "hidden";
}

/*********************************Menu***********************************/
//Event Listeners
document.getElementById('home_button').addEventListener("click", (e) => {openMenu("home");});
document.getElementById('info_button').addEventListener("click", (e) => {openMenu("info");});
document.getElementById('achieve_button').addEventListener("click", (e) => {openMenu("achieve");});
document.getElementById('html_button').addEventListener("click", (e) => {openMenu("html");});
document.getElementById('css_button').addEventListener("click", (e) => {openMenu("css");});
document.getElementById('js_button').addEventListener("click", (e) => {openMenu("js");});
document.getElementById('python_button').addEventListener("click", (e) => {openMenu("python");});
document.getElementById('java_button').addEventListener("click", (e) => {openMenu("java");});
document.getElementById('batch_button').addEventListener("click", (e) => {openMenu("batch");});
//Open Menus
function openMenu(name) {
    const menus = ["home", "info", "achieve", "html", "css", "js", "python", "java", "batch"];
    for (let menu of menus)
        if (menu != name) {
            document.getElementById(menu).style.visibility = "hidden";
        }
    document.getElementById(name).style.visibility = "visible";
}
console.log("Testing...");
/******************************Achievements******************************/
//Event Listeners
let achieve = document.getElementById('achieve');
achieve.addEventListener("scroll", (e) => {achieve.style.overflowY = "scroll"; console.log("Executed.");});
//Achievements
function checkAchieves() {
    if (tMoney >= 1000000000)
        document.getElementById('coins').src = "images/Coins.jpg";
    else if (tMoney >= 1000) {
        document.getElementById('coins').src = "images/Gray-coins.bmp";
        if (tMoney >= 1000000)
            document.getElementById('coins').style.opacity = "1";
        else
            document.getElementById('coins').style.opacity = "0.1";
    }
    if (chars >= 10000)
        document.getElementById('characters').src = "images/Characters.jpg";
    else if (chars >= 100) {
        document.getElementById('characters').src = "images/Gray-characters.bmp";
        if (chars >= 1000)
            document.getElementById('characters').style.opacity = "1";
        else
            document.getElementById('characters').style.opacity = "0.1";
    }
    if (completeBrowser && completeIdle)
        document.getElementById('html_code').src = "images/HTML.jpg";
    else if (completeBrowser || completeIdle)
        document.getElementById('html_code').src = "images/Gray-html.bmp";
    if (completeStyle)
        document.getElementById('css_code').src = "images/CSS.jpg";
}
//Hidden Components
document.getElementById('hSpeaker').addEventListener("click", (e) => {
    document.getElementById('hSpeaker').remove();
    document.getElementById('speaker').src = "images/Speaker.png";
});
document.getElementById('hMonitor').addEventListener("click", (e) => {
    document.getElementById('hMonitor').remove();
    document.getElementById('monitor').src = "images/Monitor.png";
});
document.getElementById('hTower').addEventListener("click", (e) => {
    document.getElementById('hTower').remove();
    document.getElementById('tower').src = "images/Tower.png";
});
document.getElementById('hKeyboard').addEventListener("click", (e) => {
    document.getElementById('hKeyboard').remove();
    document.getElementById('keyboard').src = "images/Keyboard.png";
});
document.getElementById('hMouse').addEventListener("click", (e) => {
    document.getElementById('hMouse').remove();
    document.getElementById('mouse').src = "images/Mouse.png";
});