export interface U8IncMap {
  0: 1;
  1: 2;
  2: 3;
  3: 4;
  4: 5;
  5: 6;
  6: 7;
  7: 8;
  8: 9;
  9: 10;
  10: 11;
  11: 12;
  12: 13;
  13: 14;
  14: 15;
  15: 16;
  16: 17;
  17: 18;
  18: 19;
  19: 20;
  20: 21;
  21: 22;
  22: 23;
  23: 24;
  24: 25;
  25: 26;
  26: 27;
  27: 28;
  28: 29;
  29: 30;
  30: 31;
  31: 32;
  32: 33;
  33: 34;
  34: 35;
  35: 36;
  36: 37;
  37: 38;
  38: 39;
  39: 40;
  40: 41;
  41: 42;
  42: 43;
  43: 44;
  44: 45;
  45: 46;
  46: 47;
  47: 48;
  48: 49;
  49: 50;
  50: 51;
  51: 52;
  52: 53;
  53: 54;
  54: 55;
  55: 56;
  56: 57;
  57: 58;
  58: 59;
  59: 60;
  60: 61;
  61: 62;
  62: 63;
  63: 64;
  64: 65;
  65: 66;
  66: 67;
  67: 68;
  68: 69;
  69: 70;
  70: 71;
  71: 72;
  72: 73;
  73: 74;
  74: 75;
  75: 76;
  76: 77;
  77: 78;
  78: 79;
  79: 80;
  80: 81;
  81: 82;
  82: 83;
  83: 84;
  84: 85;
  85: 86;
  86: 87;
  87: 88;
  88: 89;
  89: 90;
  90: 91;
  91: 92;
  92: 93;
  93: 94;
  94: 95;
  95: 96;
  96: 97;
  97: 98;
  98: 99;
  99: 100;
  100: 101;
  101: 102;
  102: 103;
  103: 104;
  104: 105;
  105: 106;
  106: 107;
  107: 108;
  108: 109;
  109: 110;
  110: 111;
  111: 112;
  112: 113;
  113: 114;
  114: 115;
  115: 116;
  116: 117;
  117: 118;
  118: 119;
  119: 120;
  120: 121;
  121: 122;
  122: 123;
  123: 124;
  124: 125;
  125: 126;
  126: 127;
  127: 128;
  128: 129;
  129: 130;
  130: 131;
  131: 132;
  132: 133;
  133: 134;
  134: 135;
  135: 136;
  136: 137;
  137: 138;
  138: 139;
  139: 140;
  140: 141;
  141: 142;
  142: 143;
  143: 144;
  144: 145;
  145: 146;
  146: 147;
  147: 148;
  148: 149;
  149: 150;
  150: 151;
  151: 152;
  152: 153;
  153: 154;
  154: 155;
  155: 156;
  156: 157;
  157: 158;
  158: 159;
  159: 160;
  160: 161;
  161: 162;
  162: 163;
  163: 164;
  164: 165;
  165: 166;
  166: 167;
  167: 168;
  168: 169;
  169: 170;
  170: 171;
  171: 172;
  172: 173;
  173: 174;
  174: 175;
  175: 176;
  176: 177;
  177: 178;
  178: 179;
  179: 180;
  180: 181;
  181: 182;
  182: 183;
  183: 184;
  184: 185;
  185: 186;
  186: 187;
  187: 188;
  188: 189;
  189: 190;
  190: 191;
  191: 192;
  192: 193;
  193: 194;
  194: 195;
  195: 196;
  196: 197;
  197: 198;
  198: 199;
  199: 200;
  200: 201;
  201: 202;
  202: 203;
  203: 204;
  204: 205;
  205: 206;
  206: 207;
  207: 208;
  208: 209;
  209: 210;
  210: 211;
  211: 212;
  212: 213;
  213: 214;
  214: 215;
  215: 216;
  216: 217;
  217: 218;
  218: 219;
  219: 220;
  220: 221;
  221: 222;
  222: 223;
  223: 224;
  224: 225;
  225: 226;
  226: 227;
  227: 228;
  228: 229;
  229: 230;
  230: 231;
  231: 232;
  232: 233;
  233: 234;
  234: 235;
  235: 236;
  236: 237;
  237: 238;
  238: 239;
  239: 240;
  240: 241;
  241: 242;
  242: 243;
  243: 244;
  244: 245;
  245: 246;
  246: 247;
  247: 248;
  248: 249;
  249: 250;
  250: 251;
  251: 252;
  252: 253;
  253: 254;
  254: 255;
  255: 0;
}

export type U8DecMap = {
  [K in keyof U8IncMap as U8IncMap[K]]: K;
};

export interface ASCIICodeMap {
  0: "\u0000";
  1: "\u0001";
  2: "\u0002";
  3: "\u0003";
  4: "\u0004";
  5: "\u0005";
  6: "\u0006";
  7: "\u0007";
  8: "\b";
  9: "\t";
  10: "\n";
  11: "\u0011";
  12: "\u0012";
  13: "\r";
  14: "\u0014";
  15: "\u0015";
  16: "\u0016";
  17: "\u0017";
  18: "\u0018";
  19: "\u0019";
  20: "\0";
  21: "\0";
  22: "\0";
  23: "\0";
  24: "\0";
  25: "\0";
  26: "\0";
  27: "\0";
  28: "\0";
  29: "\0";
  30: "\0";
  31: "\0";
  32: " ";
  33: "!";
  34: '"';
  35: "#";
  36: "$";
  37: "%";
  38: "&";
  39: "'";
  40: "(";
  41: ")";
  42: "*";
  43: "+";
  44: ",";
  45: "-";
  46: ".";
  47: "/";
  48: "0";
  49: "1";
  50: "2";
  51: "3";
  52: "4";
  53: "5";
  54: "6";
  55: "7";
  56: "8";
  57: "9";
  58: ":";
  59: ";";
  60: "<";
  61: "=";
  62: ">";
  63: "?";
  64: "@";
  65: "A";
  66: "B";
  67: "C";
  68: "D";
  69: "E";
  70: "F";
  71: "G";
  72: "H";
  73: "I";
  74: "J";
  75: "K";
  76: "L";
  77: "M";
  78: "N";
  79: "O";
  80: "P";
  81: "Q";
  82: "R";
  83: "S";
  84: "T";
  85: "U";
  86: "V";
  87: "W";
  88: "X";
  89: "Y";
  90: "Z";
  91: "[";
  92: "\\";
  93: "]";
  94: "^";
  95: "_";
  96: "`";
  97: "a";
  98: "b";
  99: "c";
  100: "d";
  101: "e";
  102: "f";
  103: "g";
  104: "h";
  105: "i";
  106: "j";
  107: "k";
  108: "l";
  109: "m";
  110: "n";
  111: "o";
  112: "p";
  113: "q";
  114: "r";
  115: "s";
  116: "t";
  117: "u";
  118: "v";
  119: "w";
  120: "x";
  121: "y";
  122: "z";
  123: "{";
  124: "|";
  125: "}";
  126: "~";
  127: "\u0127";
  128: "\u0128";
  129: "\u0129";
  130: "\u0130";
  131: "\u0131";
  132: "\u0132";
  133: "\u0133";
  134: "\u0134";
  135: "\u0135";
  136: "\u0136";
  137: "\u0137";
  138: "\u0138";
  139: "\u0139";
  140: "\u0140";
  141: "\u0141";
  142: "\u0142";
  143: "\u0143";
  144: "\u0144";
  145: "\u0145";
  146: "\u0146";
  147: "\u0147";
  148: "\u0148";
  149: "\u0149";
  150: "\u0150";
  151: "\u0151";
  152: "\u0152";
  153: "\u0153";
  154: "\u0154";
  155: "\u0155";
  156: "\u0156";
  157: "\u0157";
  158: "\u0158";
  159: "\u0159";
  160: "\u0160";
  161: "\u0161";
  162: "\u0162";
  163: "\u0163";
  164: "\u0164";
  165: "\u0165";
  166: "\u0166";
  167: "\u0167";
  168: "\u0168";
  169: "\u0169";
  170: "\u0170";
  171: "\u0171";
  172: "\u0172";
  173: "\u0173";
  174: "\u0174";
  175: "\u0175";
  176: "\u0176";
  177: "\u0177";
  178: "\u0178";
  179: "\u0179";
  180: "\u0180";
  181: "µ";
  182: "\u0182";
  183: "\u0183";
  184: "\u0184";
  185: "\u0185";
  186: "\u0186";
  187: "\u0187";
  188: "\u0188";
  189: "\u0189";
  190: "\u0190";
  191: "\u0191";
  192: "À";
  193: "Á";
  194: "Â";
  195: "Ã";
  196: "Ä";
  197: "Å";
  198: "Æ";
  199: "Ç";
  200: "È";
  201: "É";
  202: "Ê";
  203: "Ë";
  204: "Ì";
  205: "Í";
  206: "Î";
  207: "Ï";
  208: "Ð";
  209: "Ñ";
  210: "Ò";
  211: "Ó";
  212: "Ô";
  213: "Õ";
  214: "Ö";
  215: "\u0215";
  216: "Ø";
  217: "Ù";
  218: "Ú";
  219: "Û";
  220: "Ü";
  221: "Ý";
  222: "Þ";
  223: "ß";
  224: "à";
  225: "á";
  226: "â";
  227: "ã";
  228: "ä";
  229: "å";
  230: "æ";
  231: "ç";
  232: "è";
  233: "é";
  234: "ê";
  235: "ë";
  236: "ì";
  237: "í";
  238: "î";
  239: "ï";
  240: "ð";
  241: "ñ";
  242: "ò";
  243: "ó";
  244: "ô";
  245: "õ";
  246: "ö";
  247: "\u0247";
  248: "ø";
  249: "ù";
  250: "ú";
  251: "û";
  252: "ü";
  253: "ý";
  254: "þ";
  255: "ÿ";
}

export type ASCIICharMap = {
  [K in keyof ASCIICodeMap as ASCIICodeMap[K]]: K;
};
