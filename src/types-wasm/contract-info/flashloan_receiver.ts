export const ContractAbi = `{"source":{"hash":"0xbf583d6cfa5336f2f2acd454ab3eee34fbc78b575c467899ed614ead0f4c70ec","language":"ink! 4.3.0","compiler":"rustc 1.70.0-nightly","build_info":{"build_mode":"Release","cargo_contract_version":"3.0.1","rust_toolchain":"nightly-x86_64-unknown-linux-gnu","wasm_opt_settings":{"keep_debug_symbols":false,"optimization_passes":"Z"}}},"contract":{"name":"flashloan_receiver","version":"0.0.1","authors":["Starlay Finance"]},"spec":{"constructors":[{"args":[{"label":"flashloan_gateway","type":{"displayName":["AccountId"],"type":0}}],"default":false,"docs":[],"label":"new","payable":false,"returnType":{"displayName":["ink_primitives","ConstructorResult"],"type":4},"selector":"0x9bae9d5e"}],"docs":[],"environment":{"accountId":{"displayName":["AccountId"],"type":0},"balance":{"displayName":["Balance"],"type":10},"blockNumber":{"displayName":["BlockNumber"],"type":14},"chainExtension":{"displayName":["ChainExtension"],"type":15},"hash":{"displayName":["Hash"],"type":12},"maxEventTopics":4,"timestamp":{"displayName":["Timestamp"],"type":13}},"events":[],"lang_error":{"displayName":["ink","LangError"],"type":6},"messages":[{"args":[{"label":"fail","type":{"displayName":["bool"],"type":3}}],"default":false,"docs":[],"label":"set_fail_execution_transfer","mutates":true,"payable":false,"returnType":{"displayName":["ink","MessageResult"],"type":4},"selector":"0x9479dda2"},{"args":[],"default":false,"docs":[],"label":"fail_execution_transfer","mutates":false,"payable":false,"returnType":{"displayName":["ink","MessageResult"],"type":7},"selector":"0xe260c078"},{"args":[{"label":"assets","type":{"displayName":["flashloanreceiver_external","ExecuteOperationInput1"],"type":8}},{"label":"amounts","type":{"displayName":["flashloanreceiver_external","ExecuteOperationInput2"],"type":9}},{"label":"premiums","type":{"displayName":["flashloanreceiver_external","ExecuteOperationInput3"],"type":9}},{"label":"initiator","type":{"displayName":["flashloanreceiver_external","ExecuteOperationInput4"],"type":0}},{"label":"params","type":{"displayName":["flashloanreceiver_external","ExecuteOperationInput5"],"type":11}}],"default":false,"docs":[" Run FlashLoan action"],"label":"FlashloanReceiver::execute_operation","mutates":false,"payable":false,"returnType":{"displayName":["ink","MessageResult"],"type":7},"selector":"0xd35b6b2d"}]},"storage":{"root":{"layout":{"struct":{"fields":[{"layout":{"struct":{"fields":[{"layout":{"enum":{"dispatchKey":"0x00000000","name":"Option","variants":{"0":{"fields":[],"name":"None"},"1":{"fields":[{"layout":{"leaf":{"key":"0x00000000","ty":0}},"name":"0"}],"name":"Some"}}}},"name":"flashloan_gateway"},{"layout":{"leaf":{"key":"0x00000000","ty":3}},"name":"fail_execution"}],"name":"Data"}},"name":"receiver"}],"name":"FlashloanReceiverContract"}},"root_key":"0x00000000"}},"types":[{"id":0,"type":{"def":{"composite":{"fields":[{"type":1,"typeName":"[u8; 32]"}]}},"path":["ink_primitives","types","AccountId"]}},{"id":1,"type":{"def":{"array":{"len":32,"type":2}}}},{"id":2,"type":{"def":{"primitive":"u8"}}},{"id":3,"type":{"def":{"primitive":"bool"}}},{"id":4,"type":{"def":{"variant":{"variants":[{"fields":[{"type":5}],"index":0,"name":"Ok"},{"fields":[{"type":6}],"index":1,"name":"Err"}]}},"params":[{"name":"T","type":5},{"name":"E","type":6}],"path":["Result"]}},{"id":5,"type":{"def":{"tuple":[]}}},{"id":6,"type":{"def":{"variant":{"variants":[{"index":1,"name":"CouldNotReadInput"}]}},"path":["ink_primitives","LangError"]}},{"id":7,"type":{"def":{"variant":{"variants":[{"fields":[{"type":3}],"index":0,"name":"Ok"},{"fields":[{"type":6}],"index":1,"name":"Err"}]}},"params":[{"name":"T","type":3},{"name":"E","type":6}],"path":["Result"]}},{"id":8,"type":{"def":{"sequence":{"type":0}}}},{"id":9,"type":{"def":{"sequence":{"type":10}}}},{"id":10,"type":{"def":{"primitive":"u128"}}},{"id":11,"type":{"def":{"sequence":{"type":2}}}},{"id":12,"type":{"def":{"composite":{"fields":[{"type":1,"typeName":"[u8; 32]"}]}},"path":["ink_primitives","types","Hash"]}},{"id":13,"type":{"def":{"primitive":"u64"}}},{"id":14,"type":{"def":{"primitive":"u32"}}},{"id":15,"type":{"def":{"variant":{}},"path":["ink_env","types","NoChainExtension"]}}],"version":"4"}`;
export const ContractFile = `{"source":{"hash":"0xbf583d6cfa5336f2f2acd454ab3eee34fbc78b575c467899ed614ead0f4c70ec","language":"ink! 4.3.0","compiler":"rustc 1.70.0-nightly","wasm":"0x0061736d0100000001430b60027f7f0060017f0060047f7f7f7f017f60037f7f7f0060037f7f7f017f60017f017f60027f7f017f60000060087f7f7e7f7f7f7f7f017f60037e7e7f006000017f02910108057365616c310b6765745f73746f726167650002057365616c301176616c75655f7472616e736665727265640000057365616c310463616c6c0008057365616c3005696e7075740000057365616c3007616464726573730000057365616c320b7365745f73746f726167650002057365616c300b7365616c5f72657475726e000303656e76066d656d6f727902010210031b1a040000040500030001090a0000050606000000000100010007070608017f01418080040b0711020463616c6c001f066465706c6f7900200ace3e1a2b01017f037f2002200346047f200005200020036a200120036a2d00003a0000200341016a21030c010b0b0bbd0201047f230041206b22022400200241086a2001100941012104024020022d00084101710d000240024002400240024020022d0009220341037141016b0e03030201000b200341fc01714102762103410021040c040b200341ff017141034b0d03200128020422054104490d032001280200220428000021032001200541046b3602042001200441046a36020020034180808080044921040c030b200220033a0015200241013a0014200220013602102002410036021c200241106a2002411c6a4104100a450d010c020b200220033a0015200241013a001420022001360210200241003b011c200241106a2002411c6a4102100a0d0120022f011c220141ff014d0d0120014102762103410021040c010b200228021c220141808004492104200141027621030b2000200336020420002004360200200241206a24000b3c01017f200020012802042202047f2001200241016b36020420012001280200220141016a36020020012d00000520010b3a000120002002453a00000b900101027f20002f01042103200041003a0004410121040240024020034101710440200120034108763a0000200028020022002802042203200241016b2202490d02200141016a20002802002201200210071a0c010b2000280200220028020422032002490d01200120002802002201200210071a0b2000200320026b3602042000200120026a360200410021040b20040b3301027f230041106b22012400200141086a2000100920012d0009210020012d0008200141106a2400410171452000410146710b0a00200120004120100d0b4801027f024002402000280208220320026a22042003490d00200420002802044b0d00200420036b2002470d01200028020020036a2001200210071a200020043602080f0b000b000b2601017f230041106b22022400200220003a000f20012002410f6a4101100d200241106a24000b2601017f230041106b220124002001410036020c20002001410c6a4104100d200141106a24000b2a01017f230041106b220324002003200137030820032000370300200220034110100d200341106a24000b5502027f027e230041206b22002400200041106a22014200370300200042003703082000411036021c200041086a2000411c6a10012001290300210220002903082103200041206a2400410541042002200384501b0b0a00200120004104100d0b870301027f230041d0006b22022400200241186a200110090240024002400240024020022d001841017145044020022d00190e020203010b200041083602000c040b200041083602000c030b200241106a2001100920022d00104101710d01410621030240024020022d00110e020100030b200241086a2001100920022d00084101710d0202400240024002400240024020022d000922030e06000504010203080b200241406b200110172002280244450d07200241386a200241c8006a28020036020020022002290340370330410021030c040b410321030c030b410421030c020b200241406b200110172002280244450d04200241386a200241c8006a28020036020020022002290340370330410521030c010b410221030b200241286a200241386a280200360200200220022903303703200b200020022903203702042000410c6a200241286a280200360200200020033602000c020b2001100b044020004287808080103702000c020b200041083602000c010b200041083602000b200241d0006a24000b4201027f230041106b22012400200141086a2000100920012d0009210020012d00082102200141106a240041024101410220004101461b410020001b20024101711b0b10002000047f2000200110160520010b0bb50101027f2000200020016a41016b410020016b7122014d0440024041808204280200220020016a22032000490d004184820428020020034904402001200141ffff036a22024b044041000f0b200241107640002200417f46044041000f0b2000200041ffff037147044041000f0b2000411074220020024180807c716a2203200049044041000f0b41002102418482042003360200200020016a22032000490d010b418082042003360200200021020b20020f0b000b9d05010a7f230041106b220624002006200110180240200628020422030440200628020021090240024020062802082202450d00200241076b22014100200120024d1b2108200341036a417c7120036b220a417f46210b41002101034002400240024002400240200120036a2d00002205411874411875220741004e0440200b200a20016b410371720d020240200120084f0d000340200120036a220541046a280200200528020072418081828478710d012001200141086a22014b0d0320012008490d000b0b200120024f0d0720012002200120024b1b21050340200120036a2c00004100480d062005200141016a2201470d000b0c070b024002402005418080046a2d000041026b0e03040100090b200141016a220420024f0d08200320046a2c000021040240024002400240200541f0016b0e050100000002000b2007410f6a41ff017141024b0d0b20044140480d020c0b0b200441f0006a41ff01714130490d010c0a0b2004418f7f4a0d090b200141026a220520024f0d08200320056a2c000041bf7f4a0d08200141036a220120024f0d08200120036a2c000041bf7f4c0d040c080b200141016a220420024f0d07200320046a2c00002104024002400240200541e001470440200541ed01460d012007411f6a41ff0171410c490d022007417e71416e470d0b20044140480d030c0b0b200441607141a07f460d020c0a0b200441a07f480d010c090b200441bf7f4a0d080b200141026a220120024f0d07200120036a2c000041bf7f4c0d030c070b000b200141016a21010c020b200141016a220120024f0d04200120036a2c000041bf7f4a0d040b200141016a21010b20012002490d000b0b2000200236020820002003360204200020093602000c020b200041003602040c010b200041003602040b200641106a24000bc00101057f230041106b22032400200341086a20011008024002402003280208450440024020012802042205200328020c2202490d0002402002450440410121040c010b20024100480d0420032002101920032802002204450d04200128020421050b200220054b0d002004200128020022042002100721062001200520026b3602042001200220046a3602002000200236020820002006360204200020023602000c020b200041003602040c010b200041003602040b200341106a24000f0b000b2201017f2001047f2001410110160541010b210220002001360204200020023602000be50101067f230041106b22032400200341086a20011008024020032802084504400240200328020c220241ffffffff00712002470d0020024104742204200128020422054b0d0002400240200204400240200241ffffff3f4b0d00200241047422054100480d002005200241808080c00049410374101522060d020b000b410821060c010b200128020422052004490d010b2006200128020022062004100721072001200520046b3602042001200420066a3602002000200236020820002007360204200020023602000c020b200041003602040c010b200041003602040b200341106a24000b4701017f230041106b220124002001418882043602004188820441003a0000200142808081801037020420002001100e20012802082200418180014f0440000b41002000101e000b29002000027f20014504404188820441003a000041010c010b418882044181023b010041020b101e000bc40101057f230041106b220124002001428080013702042001418882043602002001100f02402001280204220320012802082202490d00200128020021042001200320026b3602042001200220046a2205360200024020002d000045044020022003460d02200541003a0000200141013602080c010b20022003460d01200541013a000020014101360208200041016a2001100c0b20002d00212001100e2001280208220020012802044b0d00200420022001280200200010051a200141106a24000f0b000b0d0020004188820420011006000b9a2502267f037e23004190026b220124000240101141ff01714105470d002001418080013602c00141888204200141c0016a100320012802c0012200418180014f0d00024020004104490d002001418c82043602402001200041046b36024441888204280200220041187621032000411076210620004108762104027f200041ff01712200419401470440200041e201470440200041d30147200441ff017141db004772200641ff017141eb00472003412d4772720d03200141086a200141406b100820012802080d034101210520012802444105762200200128020c220620002006491b22030440200341808080204f0d052003410574410110152205450d050b410021002001410036022820012005360224200120033602200240200604400340200128024422084120490d06200141c8016a220e2001280240220341086a290000370300200141d0016a2212200341106a290000370300200141d8016a2214200341186a2900003703002001200841206b3602442001200341206a360240200120032900003703c00120012802202000460440200141206a210d230041206b2203240002400240200041016a2200450d00200d280200220520056a22082005490d0041042008200020002008491b2200200041044d1b221141057421002011418080802049210402402005044020034101360218200320054105743602142003200d2802043602100c010b200341003602180b200341106a2109230041106b220824002003027f0240027f0240200404400240200041004e044020092802080d012008200010192008280204210520082802000c040b0c040b20092802042215450440200841086a20001019200828020c210520082802080c030b20002105410041808204280200220420006a220a2004490d021a2009280200210941848204280200200a490440200041ffff036a220a41107640002205417f46200541ffff0371200547720d0220054110742204200a4180807c716a22052004490d02418482042005360200200021054100200020046a220a2004490d031a0b41808204200a36020041002004450d021a20042009201510070c020b200320003602040c020b2000210541000b2204044020032004360204200341086a200536020041000c020b20032000360204200341086a410136020041010c010b200341086a410036020041010b360200200841106a24002003280200450d01200341086a2802001a0b000b20032802042100200d2011360200200d2000360204200341206a240020012802242105200128022821000b200520004105746a220320012903c001370000200341186a2014290300370000200341106a2012290300370000200341086a200e290300370000200041016a2200450d0720012000360228200641016b22060d000b200128022021030c010b2005450d040b200141f8006a200141406b101a200128027c450d0320014188016a200141406b101a200128028c01450d03200128024422044120490d03200141c8016a22092001280240220641096a290000370300200141d0016a2208200641116a290000370300200141d7016a220a200641186a2900003700002001200441206b3602442001200641206a360240200120062900013703c00120062d0000210d200141206a200141406b10182001280224450d03200141d0006a200141286a280200360200200141f0006a20014180016a280200360200200141e0006a20014190016a280200360200200141a0016a2009290300370300200141a8016a2008290300370300200141af016a200a29000037000020012001290320370348200120012903783703682001200129038801370358200120012903c0013703980141000c020b200441ff017141e00047200641ff017141c0014772200341f80047720d0241020c010b200441ff017141f90047200641ff017141dd014772200341a20147720d01200141406b101441ff017122084102460d0141010b2111200141376a200141af016a290000370000200141306a200141a8016a290300370300200141286a200141a0016a29030037030020014190016a200141f0006a28020036020020014180016a200141e0006a280200360200200141186a200141d0006a2802003602002001200129039801370320200120012903683703880120012001290358370378200120012903483703102001428080013702c4012001418882043602c001200141c0016a100f20012802c401220620012802c8012204490d0120012802c00121092001200620046b22063602c00120092004200420096a220a200141c0016a10002104200620012802c001220949410c20042004410c4f1b72200945720d012001200941016b220e36026c2001200a41016a220436026802400240200a2d0000220a0e020100030b200e4120490d02200141a0016a200441096a290000370300200141a8016a200441116a290000370300200141af016a200441186a2900003700002001200941216b36026c2001200441206a360268200120042900013703980120042d000021060b200141d7016a2209200141af016a290000370000200141d0016a220e200141a8016a290300370300200141c8016a2212200141a0016a29030037030020012001290398013703c001200141e8006a101441ff017122044102460d01200141b1016a2009290000370000200141aa016a200e290300370100200141a2016a2012290300370100200120012903c00137019a01200120043a00b901200120063a0099012001200a3a009801024002400240201141016b0e020102000b200141c9016a200141286a290300370000200141d1016a200141306a290300370000200141d8016a200141376a290000370000200141f4016a20014190016a28020036020020014180026a20014180016a2802003602002001200d3a00c001200120012903203700c101200120003602e801200120053602e401200120033602e00120012001290388013702ec01200120012903783703f8012001418c026a200141186a2802003602002001200129031037028402027f230041c0036b22002400200141c0016a2203280240210a200328023c21052003280234210d200328023021082003280228211120032802242106200041186a200341186a290000370300200041106a200341106a290000370300200041086a200341086a290000370300200020032900003703000240027f410020014198016a22012d00210d001a200041808001360280014188820420004180016a1004200041286a41918204290000370300200041306a41998204290000370300200041376a41a08204290000370000200041898204290000370320410020012d0000450d001a418882042d00002118200041d8006a2219200141196a290000370300200041d0006a221a200141116a290000370300200041c8006a221b200141096a29000037030020002001290001370340024020110440200041e8016a211c200041b8016a2101200041e0026a2109200041d8016a2103200041b9016a210420004198026a211d200041a0036a210e200041c8026a2112200041a0016a211420004180026a211e200041a8016a2115200041e0016a211f0340200041f8006a220c200641186a2202290000370300200041f0006a220f200641106a2207290000370300200041e8006a2213200641086a220b29000037030020002006290000370360200a450d04200541086a222029030021262005290300212820144200370300201441086a4200370300201441106a420037030020004198016a200229000037030020004190016a200729000037030020004188016a200b2900003703002000200629000037038001200041a8026a220720004180016a2202413810071a20022007413810071a201e202637030020042000290320370000200441086a2216200041286a2221290300370000200441106a2222200041306a2223290300370000200441176a2224200041376a222529000037000020032000290300370000200341086a200041086a290300370000200341106a200041106a290300370000200341186a200041186a290300370000200020283703f801200020183a00b801200041003602a002200041d4e69ef60636029802200041003602900220004280808080103703880220002903b00121272000428080013702840320004188820436028003200220004180036a100c200028028403220b2000280288032202490d04200028028003210720004100360288032000200b20026b360284032000200220076a3602800320002903a001201529030020004180036a101020002802840322102000280288032202490d04200028028003210b20004100360288032000201020026b3602840320002002200b6a36028003201d20004180036a2202101220032002100c20012002100c202820262002101020002802880322022000280284034f0d0420002802800320026a41003a00002000200241016a3602880320004180036a41014100100d20002802840322172000280288032202490d0420002802800321102000201720026b221736028003410c410020072027200b20102002200220106a220220004180036a100222072007410c4f1b410d712017200028028003220749720d04200020073602bc03200020023602b80320004180036a200041b8036a1013024020002802800341066b0e03000505030b200041c0026a200c290300370300200041b8026a200f290300370300200041b0026a201329030037030020124200370300201241086a4200370300201241106a4200370300200020002903603703a80220004180016a2202200041a8026a2207413810071a20004180036a220b2002413810071a2002200b413810071a20042000290320370000201620212903003700002022202329030037000020242025290000370000200020183a00b801200042e5d0e1f9023703d80120002903b00121262000428080013702ac022000418882043602a80220022007100c20002802ac02220b20002802b0022202490d0420002802a8022107200041003602b0022000200b20026b3602ac022000200220076a3602a80220002903a0012015290300200041a8026a101020002802ac02221020002802b0022202490d0420002802a802210b200041003602b0022000201020026b3602ac0220002002200b6a3602a8022003200041a8026a2202101220012002100c20002802ac02221620002802b0022202490d0420002802a80221102000201620026b22163602a802410c410020072026200b20102002200220106a2202200041a8026a100222072007410c4f1b410d71201620002802a80222074972200745720d042000200741016b220b3602ac022000200241016a22073602a80202400240024020022d00000e020001070b200b41104f0d010c060b200041a8026a100b1a0c050b200d450d042008290300222620052903007c222820265422022002ad200841086a290300222720202903007c7c222620275420262027511b0d042007290000202854200741086a290000222720265420262027511b0d0220092000290340370000200941186a2019290300370000200941106a201a290300370000200941086a201b29030037000020004198036a200c29030037030020004190036a200f29030037030020004188036a2013290300370300200e4200370300200e41086a4200370300200e41106a4200370300200020002903603703800320004180016a220220004180036a220c413810071a200041a8026a220f2002413810071a2002200f413810071a201f2026370300200141186a2019290300370000200141106a201a290300370000200141086a201b29030037000020012000290340370000200020283703d801200041003602f001200041b29fece87b3602e80120002903b001212720004280800137028403200041888204360280032002200c100c200028028403220f2000280288032202490d04200028028003210c20004100360288032000200f20026b3602840320002002200c6a3602800320002903a001201529030020004180036a101020002802840322132000280288032202490d04200028028003210f20004100360288032000201320026b3602840320002002200f6a36028003201c20004180036a2202101220012002100c202820262002101020002802840322072000280288032202490d0420002802800321132000200720026b220736028003410c4100200c2027200f20132002200220136a220220004180036a1002220c200c410c4f1b410d712007200028028003220c49720d042000200c3602bc03200020023602b80320004180036a200041b8036a1013024020002802800341066b0e03000505030b200841106a2108200541106a2105200d41016b210d200641206a2106200a41016b210a201141016b22110d000b0b41010c010b41000b200041c0036a24000c010b000b101b000b200120083a00b901200141c0016a220020014198016a412210071a2000101d41004100101c000b2004101b000b41014101101c000b000bce0101027f230041306b2200240002400240101141ff01714105470d0020004180800136020841888204200041086a100320002802082201418180014f0d00200141244f044041888204280200419bddf6f405460d020b41014101101c000b000b418c82042d00002101200041126a419582042900003701002000411a6a419d8204290000370100200041216a41a48204290000370000200020013a00092000418d820429000037010a200041003a0029200041013a0008200041086a101d4188820441003b010041004102101e000b0bc3010200418080040b800101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010041c281040b33020202020202020202020202020202020202020202020202020202020202030303030303030303030303030303030404040404","build_info":{"build_mode":"Release","cargo_contract_version":"3.0.1","rust_toolchain":"nightly-x86_64-unknown-linux-gnu","wasm_opt_settings":{"keep_debug_symbols":false,"optimization_passes":"Z"}}},"contract":{"name":"flashloan_receiver","version":"0.0.1","authors":["Starlay Finance"]},"spec":{"constructors":[{"args":[{"label":"flashloan_gateway","type":{"displayName":["AccountId"],"type":0}}],"default":false,"docs":[],"label":"new","payable":false,"returnType":{"displayName":["ink_primitives","ConstructorResult"],"type":4},"selector":"0x9bae9d5e"}],"docs":[],"environment":{"accountId":{"displayName":["AccountId"],"type":0},"balance":{"displayName":["Balance"],"type":10},"blockNumber":{"displayName":["BlockNumber"],"type":14},"chainExtension":{"displayName":["ChainExtension"],"type":15},"hash":{"displayName":["Hash"],"type":12},"maxEventTopics":4,"timestamp":{"displayName":["Timestamp"],"type":13}},"events":[],"lang_error":{"displayName":["ink","LangError"],"type":6},"messages":[{"args":[{"label":"fail","type":{"displayName":["bool"],"type":3}}],"default":false,"docs":[],"label":"set_fail_execution_transfer","mutates":true,"payable":false,"returnType":{"displayName":["ink","MessageResult"],"type":4},"selector":"0x9479dda2"},{"args":[],"default":false,"docs":[],"label":"fail_execution_transfer","mutates":false,"payable":false,"returnType":{"displayName":["ink","MessageResult"],"type":7},"selector":"0xe260c078"},{"args":[{"label":"assets","type":{"displayName":["flashloanreceiver_external","ExecuteOperationInput1"],"type":8}},{"label":"amounts","type":{"displayName":["flashloanreceiver_external","ExecuteOperationInput2"],"type":9}},{"label":"premiums","type":{"displayName":["flashloanreceiver_external","ExecuteOperationInput3"],"type":9}},{"label":"initiator","type":{"displayName":["flashloanreceiver_external","ExecuteOperationInput4"],"type":0}},{"label":"params","type":{"displayName":["flashloanreceiver_external","ExecuteOperationInput5"],"type":11}}],"default":false,"docs":[" Run FlashLoan action"],"label":"FlashloanReceiver::execute_operation","mutates":false,"payable":false,"returnType":{"displayName":["ink","MessageResult"],"type":7},"selector":"0xd35b6b2d"}]},"storage":{"root":{"layout":{"struct":{"fields":[{"layout":{"struct":{"fields":[{"layout":{"enum":{"dispatchKey":"0x00000000","name":"Option","variants":{"0":{"fields":[],"name":"None"},"1":{"fields":[{"layout":{"leaf":{"key":"0x00000000","ty":0}},"name":"0"}],"name":"Some"}}}},"name":"flashloan_gateway"},{"layout":{"leaf":{"key":"0x00000000","ty":3}},"name":"fail_execution"}],"name":"Data"}},"name":"receiver"}],"name":"FlashloanReceiverContract"}},"root_key":"0x00000000"}},"types":[{"id":0,"type":{"def":{"composite":{"fields":[{"type":1,"typeName":"[u8; 32]"}]}},"path":["ink_primitives","types","AccountId"]}},{"id":1,"type":{"def":{"array":{"len":32,"type":2}}}},{"id":2,"type":{"def":{"primitive":"u8"}}},{"id":3,"type":{"def":{"primitive":"bool"}}},{"id":4,"type":{"def":{"variant":{"variants":[{"fields":[{"type":5}],"index":0,"name":"Ok"},{"fields":[{"type":6}],"index":1,"name":"Err"}]}},"params":[{"name":"T","type":5},{"name":"E","type":6}],"path":["Result"]}},{"id":5,"type":{"def":{"tuple":[]}}},{"id":6,"type":{"def":{"variant":{"variants":[{"index":1,"name":"CouldNotReadInput"}]}},"path":["ink_primitives","LangError"]}},{"id":7,"type":{"def":{"variant":{"variants":[{"fields":[{"type":3}],"index":0,"name":"Ok"},{"fields":[{"type":6}],"index":1,"name":"Err"}]}},"params":[{"name":"T","type":3},{"name":"E","type":6}],"path":["Result"]}},{"id":8,"type":{"def":{"sequence":{"type":0}}}},{"id":9,"type":{"def":{"sequence":{"type":10}}}},{"id":10,"type":{"def":{"primitive":"u128"}}},{"id":11,"type":{"def":{"sequence":{"type":2}}}},{"id":12,"type":{"def":{"composite":{"fields":[{"type":1,"typeName":"[u8; 32]"}]}},"path":["ink_primitives","types","Hash"]}},{"id":13,"type":{"def":{"primitive":"u64"}}},{"id":14,"type":{"def":{"primitive":"u32"}}},{"id":15,"type":{"def":{"variant":{}},"path":["ink_env","types","NoChainExtension"]}}],"version":"4"}`;