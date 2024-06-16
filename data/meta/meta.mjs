// թարգմանիչ ԾՐԱԳԻՐ֊ի
const compiler = {

  "compile": function (input) {
    // սկզբնադիր մեծութիւնք փոփոխականաց թարգմանչի
    this.inbuf = input ;
    this.initialize() ;
    // կանչ առաջնոյն կանոնի
    this.ctxpush('ԾՐԱԳԻՐ') ;
    this["կանոն֊ԾՐԱԳԻՐ"]() ;
    this.ctxpop() ;
    // առանձին մշակումն խափանման առաջնոյ կանոնի
    if ((!this.eflag) && (!this.pflag)) {
      this.eflag = true ;
      this.erule = 'ԾՐԱԳԻՐ' ;
      this.einput = this.inp ; } ;
    return this.eflag ;
  },

  // Աւրինակ քերականութեան սահմանման 
  // Ամբողջական ինքնանկարագրող ինքնաթարգմանող թարգմանիչ 
  // James M. Neighbors 
  // սահման թարգմանչի 
  "կանոն֊ԾՐԱԳԻՐ": function () {
    this.test('․ՔԵՐԱԿԱՆՈՒԹԻՒՆ');
    if (this.pflag) {
      this.ctxpush('ՏԱՐԲԵՐԱՆՇԱՆ') ;
      this["կանոն֊ՏԱՐԲԵՐԱՆՇԱՆ"]() ;
      this.ctxpop() ;
      if (this.eflag) return ;
      if (!this.pflag) this.err();
      this.out('// թարգմանիչ ') ;
      this.out(this.token) ;
      this.out('֊ի') ;
      this.eol() ;
      this.pflag = true ;
      this.out('const compiler = {') ;
      this.stack[this.stackframe + 2] += 2 ;
      this.eol() ;
      this.eol() ;
      this.pflag = true ;
      this.ctxpush('ՆԱԽԱԲԱՆ') ;
      this["կանոն֊ՆԱԽԱԲԱՆ"]() ;
      this.ctxpop() ;
      if (this.eflag) return ;
      if (!this.pflag) this.err();
      this.pflag = true ;
      while (this.pflag) {
        this.ctxpush('ՆԱԽԱԴԱՍՈՒԹԻՒՆ') ;
        this["կանոն֊ՆԱԽԱԴԱՍՈՒԹԻՒՆ"]() ;
        this.ctxpop() ;
        if (this.eflag) return ;
        if (this.pflag) {
        } ;
        if (!this.pflag) {
          this.ctxpush('ՄԵԿՆԱԲԱՆՈՒԹԻՒՆ') ;
          this["կանոն֊ՄԵԿՆԱԲԱՆՈՒԹԻՒՆ"]() ;
          this.ctxpop() ;
          if (this.eflag) return ;
          if (this.pflag) {
          } ;
        } ;
      } ;
      this.pflag = true ;
      if (!this.pflag) this.err();
      this.test('․ԵԶԵՐՔ');
      if (!this.pflag) this.err();
      this.pflag = true ;
      while (this.pflag) {
        this.ctxpush('ԲԱՌ') ;
        this["կանոն֊ԲԱՌ"]() ;
        this.ctxpop() ;
        if (this.eflag) return ;
        if (this.pflag) {
        } ;
        if (!this.pflag) {
          this.ctxpush('ՄԵԿՆԱԲԱՆՈՒԹԻՒՆ') ;
          this["կանոն֊ՄԵԿՆԱԲԱՆՈՒԹԻՒՆ"]() ;
          this.ctxpop() ;
          if (this.eflag) return ;
          if (this.pflag) {
          } ;
        } ;
      } ;
      this.pflag = true ;
      if (!this.pflag) this.err();
      this.test('․ՎԵՐՋ');
      if (!this.pflag) this.err();
      this.ctxpush('ՎԵՐՋԱԲԱՆ') ;
      this["կանոն֊ՎԵՐՋԱԲԱՆ"]() ;
      this.ctxpop() ;
      if (this.eflag) return ;
      if (!this.pflag) this.err();
      this.stack[this.stackframe + 2] -= 2 ;
      this.out('}') ;
      this.eol() ;
      this.pflag = true ;
      this.eol() ;
      this.out('export {compiler}') ;
      this.eol() ;
      this.pflag = true ;
    } ;
  } ,

  // Նախաբան, յորում սահմեմք զանհրաժեշտ առարկայս  
  "կանոն֊ՆԱԽԱԲԱՆ": function () {
    this.out('"compile": function (input) {') ;
    this.stack[this.stackframe + 2] += 2 ;
    this.eol() ;
    this.pflag = true ;
    if (true) {
      this.out('// սկզբնադիր մեծութիւնք փոփոխականաց թարգմանչի') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.inbuf = input ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.initialize() ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('// կանչ առաջնոյն կանոնի') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.ctxpush(') ;
      this.out(String.fromCharCode(39)) ;
      this.out(this.token) ;
      this.out(String.fromCharCode(39)) ;
      this.out(') ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this["կանոն֊') ;
      this.out(this.token) ;
      this.out('"]() ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.ctxpop() ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('// առանձին մշակումն խափանման առաջնոյ կանոնի') ;
      this.eol() ;
      this.pflag = true ;
      this.out('if ((!this.eflag) && (!this.pflag)) {') ;
      this.stack[this.stackframe + 2] += 2 ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.eflag = true ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.erule = ') ;
      this.out(String.fromCharCode(39)) ;
      this.out(this.token) ;
      this.out(String.fromCharCode(39)) ;
      this.out(' ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.einput = this.inp ; } ;') ;
      this.stack[this.stackframe + 2] -= 2 ;
      this.eol() ;
      this.pflag = true ;
      this.out('return this.eflag ;') ;
      this.eol() ;
      this.pflag = true ;
      this.stack[this.stackframe + 2] -= 2 ;
      this.out('},') ;
      this.eol() ;
      this.eol() ;
      this.pflag = true ;
    } ;
  } ,

  // վերջաբան եւ միջանկեալ մեծութիւնք 
  "կանոն֊ՎԵՐՋԱԲԱՆ": function () {
    this.out('// փոփոխականք ընթացիկ գործառնականք') ;
    this.eol() ;
    this.pflag = true ;
    if (true) {
      this.out('pflag: false ,') ;
      this.eol() ;
      this.pflag = true ;
      this.out('tflag: false ,') ;
      this.eol() ;
      this.pflag = true ;
      this.out('eflag: false ,') ;
      this.eol() ;
      this.pflag = true ;
      this.out('inp: 0 ,') ;
      this.eol() ;
      this.pflag = true ;
      this.out('inbuf:  ') ;
      this.out(String.fromCharCode(39)) ;
      this.out(String.fromCharCode(39)) ;
      this.out(' ,') ;
      this.eol() ;
      this.pflag = true ;
      this.out('outbuf:  ') ;
      this.out(String.fromCharCode(39)) ;
      this.out(String.fromCharCode(39)) ;
      this.out(' ,') ;
      this.eol() ;
      this.pflag = true ;
      this.out('erule:  ') ;
      this.out(String.fromCharCode(39)) ;
      this.out(String.fromCharCode(39)) ;
      this.out(' ,') ;
      this.eol() ;
      this.pflag = true ;
      this.out('einput: 0 ,') ;
      this.eol() ;
      this.pflag = true ;
      this.out('token: ') ;
      this.out(String.fromCharCode(39)) ;
      this.out(String.fromCharCode(39)) ;
      this.out(' ,') ;
      this.eol() ;
      this.pflag = true ;
      this.out('labelcount: 0 ,') ;
      this.eol() ;
      this.pflag = true ;
      this.out('stackframesize: 3 ,') ;
      this.eol() ;
      this.pflag = true ;
      this.out('stackframe: 0 ,') ;
      this.eol() ;
      this.pflag = true ;
      this.out('stos: -1 ,') ;
      this.eol() ;
      this.pflag = true ;
      this.out('stack: [] ,') ;
      this.eol() ;
      this.pflag = true ;
      this.out('named_counters: {} ,') ;
      this.eol() ;
      this.pflag = true ;
      this.out('symbol_table: {} ,') ;
      this.eol() ;
      this.eol() ;
      this.pflag = true ;
      this.out('initialize: function () {') ;
      this.stack[this.stackframe + 2] += 2 ;
      this.eol() ;
      this.pflag = true ;
      this.out('// դարձ առ սկզբնադիր մեծութիւնս, վասն վերստին թարգմանութեան') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.pflag = true ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.tflag = false ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.eflag = false ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.inp = 0 ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.outbuf = ') ;
      this.out(String.fromCharCode(39)) ;
      this.out(String.fromCharCode(39)) ;
      this.out(' ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.erule = ') ;
      this.out(String.fromCharCode(39)) ;
      this.out(String.fromCharCode(39)) ;
      this.out(' ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.einput = 0 ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.token = ') ;
      this.out(String.fromCharCode(39)) ;
      this.out(String.fromCharCode(39)) ;
      this.out(' ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.labelcount = 1 ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.stackframe = -1 ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.stos = -1 ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.stack = [] ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.named_counters = {} ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.symbol_table = {} ;') ;
      this.eol() ;
      this.pflag = true ;
      this.stack[this.stackframe + 2] -= 2 ;
      this.out('},') ;
      this.eol() ;
      this.eol() ;
      this.pflag = true ;
      this.out('ctxpush: function (rulename){') ;
      this.stack[this.stackframe + 2] += 2 ;
      this.eol() ;
      this.pflag = true ;
      this.out('// ստեղծանել եւ ի ներս մղել զնոր պահունակադաշտ') ;
      this.eol() ;
      this.pflag = true ;
      this.out('var ՁԴ ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('// ձախ դաշտ նորոյն համահիւսի ժառանգէ զձախ դաշտն ընթացիկ համահիւսի') ;
      this.eol() ;
      this.pflag = true ;
      this.out('ՁԴ = 0; if (this.stackframe >= 0) ՁԴ = this.stack[this.stackframe + 2] ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.stos++ ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.stackframe = this.stos * this.stackframesize ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('// սահման պահունակադաշտի') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.stack[this.stackframe + 0] = 0 ;        // ստեղծեալ նշիչ') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.stack[this.stackframe + 1] = rulename ; // անուն ընթացիկ կանոնի') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.stack[this.stackframe + 2] = ՁԴ ;       // ձախ դաշտ') ;
      this.eol() ;
      this.pflag = true ;
      this.stack[this.stackframe + 2] -= 2 ;
      this.out('},') ;
      this.eol() ;
      this.eol() ;
      this.pflag = true ;
      this.out('ctxpop: function (){') ;
      this.stack[this.stackframe + 2] += 2 ;
      this.eol() ;
      this.pflag = true ;
      this.out('// ի դուրս մղել եւ գուցէ ջնջել զնախկին պահունակադաշտն') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.stos-- ; // ի դուրս մղել զդաշտն') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.stackframe = this.stos * this.stackframesize ;') ;
      this.eol() ;
      this.pflag = true ;
      this.stack[this.stackframe + 2] -= 2 ;
      this.out('},') ;
      this.eol() ;
      this.eol() ;
      this.pflag = true ;
      this.out('out: function (s){') ;
      this.stack[this.stackframe + 2] += 2 ;
      this.eol() ;
      this.pflag = true ;
      this.out('// արտածել զտող') ;
      this.eol() ;
      this.pflag = true ;
      this.out('var i ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('// եթե նոր տող սկանի, ապա  արտածել զձախ դաշտն նախ քան զտողն') ;
      this.eol() ;
      this.pflag = true ;
      this.out('if (this.outbuf.charAt(this.outbuf.length - 1) == ') ;
      this.out(String.fromCharCode(39)) ;
      this.out(String.fromCharCode(92)) ;
      this.out('n') ;
      this.out(String.fromCharCode(39)) ;
      this.out(') {') ;
      this.eol() ;
      this.pflag = true ;
      this.out('  i = this.stack[this.stackframe + 2] ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('  while (i>0) { this.outbuf += ') ;
      this.out(String.fromCharCode(39)) ;
      this.out(' ') ;
      this.out(String.fromCharCode(39)) ;
      this.out(' ; i-- } ; } ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.outbuf += s ;') ;
      this.eol() ;
      this.pflag = true ;
      this.stack[this.stackframe + 2] -= 2 ;
      this.out('},') ;
      this.eol() ;
      this.eol() ;
      this.pflag = true ;
      this.out('eol: function (){') ;
      this.stack[this.stackframe + 2] += 2 ;
      this.eol() ;
      this.pflag = true ;
      this.out('// output end of line') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.outbuf += ') ;
      this.out(String.fromCharCode(39)) ;
      this.out(String.fromCharCode(92)) ;
      this.out('n') ;
      this.out(String.fromCharCode(39)) ;
      this.out(' ;') ;
      this.eol() ;
      this.pflag = true ;
      this.stack[this.stackframe + 2] -= 2 ;
      this.out('},') ;
      this.eol() ;
      this.eol() ;
      this.pflag = true ;
      this.out('test: function (s) {') ;
      this.stack[this.stackframe + 2] += 2 ;
      this.eol() ;
      this.pflag = true ;
      this.out('// test for a string in the input') ;
      this.eol() ;
      this.pflag = true ;
      this.out('var i ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('// delete whitespace') ;
      this.eol() ;
      this.pflag = true ;
      this.out('while ((this.inbuf.charAt(this.inp) == ') ;
      this.out(String.fromCharCode(39)) ;
      this.out(' ') ;
      this.out(String.fromCharCode(39)) ;
      this.out(')  ||') ;
      this.eol() ;
      this.pflag = true ;
      this.out('       (this.inbuf.charAt(this.inp) == ') ;
      this.out(String.fromCharCode(39)) ;
      this.out(String.fromCharCode(92)) ;
      this.out('n') ;
      this.out(String.fromCharCode(39)) ;
      this.out(') ||') ;
      this.eol() ;
      this.pflag = true ;
      this.out('       (this.inbuf.charAt(this.inp) == ') ;
      this.out(String.fromCharCode(39)) ;
      this.out(String.fromCharCode(92)) ;
      this.out('r') ;
      this.out(String.fromCharCode(39)) ;
      this.out(') ||') ;
      this.eol() ;
      this.pflag = true ;
      this.out('       (this.inbuf.charAt(this.inp) == ') ;
      this.out(String.fromCharCode(39)) ;
      this.out(String.fromCharCode(92)) ;
      this.out('t') ;
      this.out(String.fromCharCode(39)) ;
      this.out(') ) this.inp++ ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('// test string case insensitive') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.pflag = true ; i = 0 ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('while (this.pflag && (i < s.length) && ((this.inp+i) < this.inbuf.length) )') ;
      this.eol() ;
      this.pflag = true ;
      this.out('{ this.pflag = (s.charAt(i) == this.inbuf.charAt(this.inp+i)) ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('  i++ ; } ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.pflag = this.pflag && (i == s.length) ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('// advance input if found') ;
      this.eol() ;
      this.pflag = true ;
      this.out('if (this.pflag) this.inp = this.inp + s.length ;') ;
      this.eol() ;
      this.pflag = true ;
      this.stack[this.stackframe + 2] -= 2 ;
      this.out('},') ;
      this.eol() ;
      this.eol() ;
      this.pflag = true ;
      this.out('reservedWord: function (s) {') ;
      this.stack[this.stackframe + 2] += 2 ;
      this.eol() ;
      this.pflag = true ;
      this.out('// delete whitespace') ;
      this.eol() ;
      this.pflag = true ;
      this.out('while ((this.inbuf.charAt(this.inp) == ') ;
      this.out(String.fromCharCode(39)) ;
      this.out(' ') ;
      this.out(String.fromCharCode(39)) ;
      this.out(')  ||') ;
      this.eol() ;
      this.pflag = true ;
      this.out('       (this.inbuf.charAt(this.inp) == ') ;
      this.out(String.fromCharCode(39)) ;
      this.out(String.fromCharCode(92)) ;
      this.out('n') ;
      this.out(String.fromCharCode(39)) ;
      this.out(') ||') ;
      this.eol() ;
      this.pflag = true ;
      this.out('       (this.inbuf.charAt(this.inp) == ') ;
      this.out(String.fromCharCode(39)) ;
      this.out(String.fromCharCode(92)) ;
      this.out('r') ;
      this.out(String.fromCharCode(39)) ;
      this.out(') ||') ;
      this.eol() ;
      this.pflag = true ;
      this.out('       (this.inbuf.charAt(this.inp) == ') ;
      this.out(String.fromCharCode(39)) ;
      this.out(String.fromCharCode(92)) ;
      this.out('t') ;
      this.out(String.fromCharCode(39)) ;
      this.out(') ) this.inp++ ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('// test string') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.pflag = true;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('var i = 0;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('while (this.pflag && (i < s.length) && ((this.inp+i) < this.inbuf.length) ) {') ;
      this.eol() ;
      this.stack[this.stackframe + 2] += 2 ;
      this.pflag = true ;
      this.out('this.pflag = s.charAt(i) == this.inbuf.charAt(this.inp+i);') ;
      this.eol() ;
      this.pflag = true ;
      this.out('i++;') ;
      this.eol() ;
      this.pflag = true ;
      this.stack[this.stackframe + 2] -= 2 ;
      this.out('};') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.pflag = this.pflag && (i == s.length);') ;
      this.eol() ;
      this.pflag = true ;
      this.out('// if found reserved word, set pflag false') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.pflag = !this.pflag;') ;
      this.eol() ;
      this.pflag = true ;
      this.stack[this.stackframe + 2] -= 2 ;
      this.out('},') ;
      this.eol() ;
      this.eol() ;
      this.pflag = true ;
      this.out('err: function () {') ;
      this.stack[this.stackframe + 2] += 2 ;
      this.eol() ;
      this.pflag = true ;
      this.out('// compilation error, provide error indication and context') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.eflag = true ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.erule = this.stack[this.stackframe + 1] ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.einput = this.inp ;') ;
      this.eol() ;
      this.pflag = true ;
      this.stack[this.stackframe + 2] -= 2 ;
      this.out('},') ;
      this.eol() ;
      this.eol() ;
      this.pflag = true ;
    } ;
  } ,

  // կազմութիւն նախադասութեան
  "կանոն֊ՆԱԽԱԴԱՍՈՒԹԻՒՆ": function () {
    this.ctxpush('ՏԱՐԲԵՐԱՆՇԱՆ') ;
    this["կանոն֊ՏԱՐԲԵՐԱՆՇԱՆ"]() ;
    this.ctxpop() ;
    if (this.eflag) return ;
    if (this.pflag) {
      this.out('"կանոն֊') ;
      this.out(this.token) ;
      this.out('": function () {') ;
      this.stack[this.stackframe + 2] += 2 ;
      this.eol() ;
      this.pflag = true ;
      this.test('=');
      if (!this.pflag) this.err();
      this.ctxpush('ԲԱՆԱՁԵՒ') ;
      this["կանոն֊ԲԱՆԱՁԵՒ"]() ;
      this.ctxpop() ;
      if (this.eflag) return ;
      if (!this.pflag) this.err();
      this.test(';');
      if (!this.pflag) this.err();
      this.stack[this.stackframe + 2] -= 2 ;
      this.out('} ,') ;
      this.eol() ;
      this.eol() ;
      this.pflag = true ;
    } ;
  } ,

  // կազմութիւն բառի
  "կանոն֊ԲԱՌ": function () {
    this.ctxpush('ՏԱՐԲԵՐԱՆՇԱՆ') ;
    this["կանոն֊ՏԱՐԲԵՐԱՆՇԱՆ"]() ;
    this.ctxpop() ;
    if (this.eflag) return ;
    if (this.pflag) {
      this.out('"կանոն֊') ;
      this.out(this.token) ;
      this.out('": function () {') ;
      this.stack[this.stackframe + 2] += 2 ;
      this.eol() ;
      this.pflag = true ;
      this.test('=');
      if (!this.pflag) this.err();
      this.ctxpush('ՍԱՀՄԱՆ֊ԵԶԵՐ') ;
      this["կանոն֊ՍԱՀՄԱՆ֊ԵԶԵՐ"]() ;
      this.ctxpop() ;
      if (this.eflag) return ;
      if (!this.pflag) this.err();
      this.test(';');
      if (!this.pflag) this.err();
      this.stack[this.stackframe + 2] -= 2 ;
      this.out('} ,') ;
      this.eol() ;
      this.eol() ;
      this.pflag = true ;
    } ;
  } ,

  // կազմութիւն մեկնաբանութեանց
  "կանոն֊ՄԵԿՆԱԲԱՆՈՒԹԻՒՆ": function () {
    this.test('#');
    if (this.pflag) {
      this.ctxpush('ԳՐԱՀԻՒՍ֊ՄԵԿՆՈՒԹԵԱՆ') ;
      this["կանոն֊ԳՐԱՀԻՒՍ֊ՄԵԿՆՈՒԹԵԱՆ"]() ;
      this.ctxpop() ;
      if (this.eflag) return ;
      if (!this.pflag) this.err();
      this.out('//') ;
      this.out(this.token) ;
      this.eol() ;
      this.pflag = true ;
    } ;
  } ,

  // ծանումն արտայայտութեանց
  "կանոն֊ԲԱՆԱՁԵՒ": function () {
    this.ctxpush('ՏԱՐԲԵՐԱԿ') ;
    this["կանոն֊ՏԱՐԲԵՐԱԿ"]() ;
    this.ctxpop() ;
    if (this.eflag) return ;
    if (this.pflag) {
      this.pflag = true ;
      while (this.pflag) {
        this.test('|');
        if (this.pflag) {
          this.out('if (!this.pflag) {') ;
          this.stack[this.stackframe + 2] += 2 ;
          this.eol() ;
          this.pflag = true ;
          this.ctxpush('ՏԱՐԲԵՐԱԿ') ;
          this["կանոն֊ՏԱՐԲԵՐԱԿ"]() ;
          this.ctxpop() ;
          if (this.eflag) return ;
          if (!this.pflag) this.err();
          this.stack[this.stackframe + 2] -= 2 ;
          this.out('} ;') ;
          this.eol() ;
          this.pflag = true ;
        } ;
      } ;
      this.pflag = true ;
      if (!this.pflag) this.err();
    } ;
  } ,

  "կանոն֊ՏԱՐԲԵՐԱԿ": function () {
    this.ctxpush('ԵԶՐ') ;
    this["կանոն֊ԵԶՐ"]() ;
    this.ctxpop() ;
    if (this.eflag) return ;
    if (this.pflag) {
      this.out('if (this.pflag) {') ;
      this.stack[this.stackframe + 2] += 2 ;
      this.eol() ;
      this.pflag = true ;
    } ;
    if (!this.pflag) {
      this.ctxpush('ԵԼՔ') ;
      this["կանոն֊ԵԼՔ"]() ;
      this.ctxpop() ;
      if (this.eflag) return ;
      if (this.pflag) {
        this.out('if (true) {') ;
        this.stack[this.stackframe + 2] += 2 ;
        this.eol() ;
        this.pflag = true ;
      } ;
    } ;
    if (this.pflag) {
      this.pflag = true ;
      while (this.pflag) {
        this.ctxpush('ԵԶՐ') ;
        this["կանոն֊ԵԶՐ"]() ;
        this.ctxpop() ;
        if (this.eflag) return ;
        if (this.pflag) {
          this.out('if (!this.pflag) this.err();') ;
          this.eol() ;
          this.pflag = true ;
        } ;
        if (!this.pflag) {
          this.ctxpush('ԵԼՔ') ;
          this["կանոն֊ԵԼՔ"]() ;
          this.ctxpop() ;
          if (this.eflag) return ;
          if (this.pflag) {
          } ;
        } ;
      } ;
      this.pflag = true ;
      if (!this.pflag) this.err();
      this.stack[this.stackframe + 2] -= 2 ;
      this.out('} ;') ;
      this.eol() ;
      this.pflag = true ;
    } ;
  } ,

  "կանոն֊ԵԶՐ": function () {
    this.ctxpush('ՏԱՐԲԵՐԱՆՇԱՆ') ;
    this["կանոն֊ՏԱՐԲԵՐԱՆՇԱՆ"]() ;
    this.ctxpop() ;
    if (this.eflag) return ;
    if (this.pflag) {
      this.out('this.ctxpush(') ;
      this.out(String.fromCharCode(39)) ;
      this.out(this.token) ;
      this.out(String.fromCharCode(39)) ;
      this.out(') ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this["կանոն֊') ;
      this.out(this.token) ;
      this.out('"]() ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.ctxpop() ;') ;
      this.eol() ;
      this.pflag = true ;
      this.out('if (this.eflag) return ;') ;
      this.eol() ;
      this.pflag = true ;
    } ;
    if (!this.pflag) {
      this.ctxpush('ՏՈՂ') ;
      this["կանոն֊ՏՈՂ"]() ;
      this.ctxpop() ;
      if (this.eflag) return ;
      if (this.pflag) {
        this.out('this.test(') ;
        this.out(String.fromCharCode(39)) ;
        this.out(this.token) ;
        this.out(String.fromCharCode(39)) ;
        this.out(');') ;
        this.eol() ;
        this.pflag = true ;
      } ;
    } ;
    if (!this.pflag) {
      this.test('(');
      if (this.pflag) {
        this.ctxpush('ԲԱՆԱՁԵՒ') ;
        this["կանոն֊ԲԱՆԱՁԵՒ"]() ;
        this.ctxpop() ;
        if (this.eflag) return ;
        if (!this.pflag) this.err();
        this.test(')');
        if (!this.pflag) this.err();
      } ;
    } ;
    if (!this.pflag) {
      this.test('․ԴԱՏԱՐԿ');
      if (this.pflag) {
        this.out('this.pflag = true ;') ;
        this.eol() ;
        this.pflag = true ;
      } ;
    } ;
    if (!this.pflag) {
      this.test('․ԱՒԵԼԱՑՆԵԼ');
      if (this.pflag) {
        this.test('(');
        if (!this.pflag) this.err();
        this.ctxpush('ՏՈՂ') ;
        this["կանոն֊ՏՈՂ"]() ;
        this.ctxpop() ;
        if (this.eflag) return ;
        if (this.pflag) {
          this.out('this.symbol_table["') ;
          this.out(this.token) ;
          this.out('"] = ') ;
          this.pflag = true ;
        } ;
        if (!this.pflag) {
          this.test('*');
          if (this.pflag) {
            this.out('this.symbol_table[this.token] = ') ;
            this.pflag = true ;
          } ;
        } ;
        if (!this.pflag) this.err();
        this.test(',');
        if (!this.pflag) this.err();
        this.test('*');
        if (this.pflag) {
          this.out('this.token') ;
          this.pflag = true ;
        } ;
        if (!this.pflag) {
          this.ctxpush('ՏՈՂ') ;
          this["կանոն֊ՏՈՂ"]() ;
          this.ctxpop() ;
          if (this.eflag) return ;
          if (this.pflag) {
            this.out('"') ;
            this.out(this.token) ;
            this.out('"') ;
            this.pflag = true ;
          } ;
        } ;
        if (!this.pflag) {
          this.ctxpush('ԹԻՒ') ;
          this["կանոն֊ԹԻՒ"]() ;
          this.ctxpop() ;
          if (this.eflag) return ;
          if (this.pflag) {
            this.out(this.token) ;
            this.pflag = true ;
          } ;
        } ;
        if (!this.pflag) {
          this.test('#');
          if (this.pflag) {
            this.ctxpush('ՏԱՐԲԵՐԱՆՇԱՆ') ;
            this["կանոն֊ՏԱՐԲԵՐԱՆՇԱՆ"]() ;
            this.ctxpop() ;
            if (this.eflag) return ;
            if (!this.pflag) this.err();
            this.out('this.named_counters["') ;
            this.out(this.token) ;
            this.out('"]') ;
            this.pflag = true ;
          } ;
        } ;
        if (!this.pflag) this.err();
        this.out(';') ;
        this.eol() ;
        this.pflag = true ;
        this.test(')');
        if (!this.pflag) this.err();
      } ;
    } ;
    if (!this.pflag) {
      this.test('․ՆՇԱՆ');
      if (this.pflag) {
        this.out('this.token = this.inbuf.charCodeAt(this.inp) ;') ;
        this.eol() ;
        this.pflag = true ;
        this.out('this.inp++ ;') ;
        this.eol() ;
        this.pflag = true ;
      } ;
    } ;
    if (!this.pflag) {
      this.test('․ՍԿԻԶԲ');
      if (this.pflag) {
        this.out('this.inp = 0 ;') ;
        this.eol() ;
        this.pflag = true ;
      } ;
    } ;
    if (!this.pflag) {
      this.test('#');
      if (this.pflag) {
        this.ctxpush('ՏԱՐԲԵՐԱՆՇԱՆ') ;
        this["կանոն֊ՏԱՐԲԵՐԱՆՇԱՆ"]() ;
        this.ctxpop() ;
        if (this.eflag) return ;
        if (!this.pflag) this.err();
        this.out('this.named_counters["') ;
        this.out(this.token) ;
        this.out('"]') ;
        this.pflag = true ;
        this.test('++');
        if (this.pflag) {
          this.out('++') ;
          this.pflag = true ;
        } ;
        if (!this.pflag) {
          this.test('--');
          if (this.pflag) {
            this.out('--') ;
            this.pflag = true ;
          } ;
        } ;
        if (!this.pflag) {
          this.test('+');
          if (this.pflag) {
            this.out('+=') ;
            this.pflag = true ;
          } ;
          if (!this.pflag) {
            this.test('-');
            if (this.pflag) {
              this.out('-=') ;
              this.pflag = true ;
            } ;
          } ;
          if (this.pflag) {
            this.ctxpush('ԹԻՒ') ;
            this["կանոն֊ԹԻՒ"]() ;
            this.ctxpop() ;
            if (this.eflag) return ;
            if (this.pflag) {
              this.out(this.token) ;
              this.pflag = true ;
            } ;
            if (!this.pflag) {
              this.test('․ԵՐԿԱՐՈՒԹԻՒՆ_ՏՈՂԻ');
              if (this.pflag) {
                this.out('this.token.length') ;
                this.pflag = true ;
              } ;
            } ;
            if (!this.pflag) this.err();
          } ;
          if (this.pflag) {
          } ;
        } ;
        if (!this.pflag) {
          this.pflag = true ;
          if (this.pflag) {
            this.out('= 0') ;
            this.pflag = true ;
          } ;
        } ;
        if (!this.pflag) this.err();
        this.out(' ;') ;
        this.eol() ;
        this.pflag = true ;
      } ;
    } ;
    if (!this.pflag) {
      this.test('{');
      if (this.pflag) {
        this.out('this.pflag = true ;') ;
        this.eol() ;
        this.pflag = true ;
        this.out('while (this.pflag) {') ;
        this.stack[this.stackframe + 2] += 2 ;
        this.eol() ;
        this.pflag = true ;
        this.ctxpush('ԲԱՆԱՁԵՒ') ;
        this["կանոն֊ԲԱՆԱՁԵՒ"]() ;
        this.ctxpop() ;
        if (this.eflag) return ;
        if (!this.pflag) this.err();
        this.stack[this.stackframe + 2] -= 2 ;
        this.out('} ;') ;
        this.eol() ;
        this.pflag = true ;
        this.out('this.pflag = true ;') ;
        this.eol() ;
        this.pflag = true ;
        this.test('}');
        if (!this.pflag) this.err();
      } ;
    } ;
  } ,

  // հրահանգք արտածման 
  "կանոն֊ԵԼՔ": function () {
    this.test('․ԵԼ');
    if (this.pflag) {
      this.test('(');
      if (!this.pflag) this.err();
      this.pflag = true ;
      while (this.pflag) {
        this.ctxpush('ԵԶՐ֊ԵԼԻՑ') ;
        this["կանոն֊ԵԶՐ֊ԵԼԻՑ"]() ;
        this.ctxpop() ;
        if (this.eflag) return ;
        if (this.pflag) {
        } ;
      } ;
      this.pflag = true ;
      if (!this.pflag) this.err();
      this.test(')');
      if (!this.pflag) this.err();
      this.out('this.pflag = true ;') ;
      this.eol() ;
      this.pflag = true ;
    } ;
  } ,

  "կանոն֊ԵԶՐ֊ԵԼԻՑ": function () {
    this.test('*');
    if (this.pflag) {
      this.out('this.out(this.token) ;') ;
      this.eol() ;
      this.pflag = true ;
    } ;
    if (!this.pflag) {
      this.ctxpush('ՏՈՂ') ;
      this["կանոն֊ՏՈՂ"]() ;
      this.ctxpop() ;
      if (this.eflag) return ;
      if (this.pflag) {
        this.out('this.out(') ;
        this.out(String.fromCharCode(39)) ;
        this.out(this.token) ;
        this.out(String.fromCharCode(39)) ;
        this.out(') ;') ;
        this.eol() ;
        this.pflag = true ;
      } ;
    } ;
    if (!this.pflag) {
      this.ctxpush('ԹԻՒ') ;
      this["կանոն֊ԹԻՒ"]() ;
      this.ctxpop() ;
      if (this.eflag) return ;
      if (this.pflag) {
        this.out('this.out(String.fromCharCode(') ;
        this.out(this.token) ;
        this.out(')) ;') ;
        this.eol() ;
        this.pflag = true ;
      } ;
    } ;
    if (!this.pflag) {
      this.test('#');
      if (this.pflag) {
        this.ctxpush('ՏԱՐԲԵՐԱՆՇԱՆ') ;
        this["կանոն֊ՏԱՐԲԵՐԱՆՇԱՆ"]() ;
        this.ctxpop() ;
        if (this.eflag) return ;
        if (!this.pflag) this.err();
        this.out('this.out(this.named_counters["') ;
        this.pflag = true ;
        this.out(this.token) ;
        this.pflag = true ;
        this.out('"]) ;') ;
        this.eol() ;
        this.pflag = true ;
      } ;
    } ;
    if (!this.pflag) {
      this.test('@');
      if (this.pflag) {
        this.out('if (this.stack[this.stackframe + 0] == 0) {') ;
        this.stack[this.stackframe + 2] += 2 ;
        this.eol() ;
        this.pflag = true ;
        this.out('this.stack[this.stackframe + 0] = this.labelcount ;') ;
        this.eol() ;
        this.pflag = true ;
        this.out('this.labelcount++ ; } ;') ;
        this.stack[this.stackframe + 2] -= 2 ;
        this.eol() ;
        this.pflag = true ;
        this.out('this.out(this.stack[this.stackframe + 0]) ;') ;
        this.eol() ;
        this.pflag = true ;
      } ;
    } ;
    if (!this.pflag) {
      this.test('․ՆՏ');
      if (this.pflag) {
        this.out('this.eol() ;') ;
        this.eol() ;
        this.pflag = true ;
      } ;
    } ;
    if (!this.pflag) {
      this.test('․ԱՂԻՒՍ');
      if (this.pflag) {
        this.out('this.out(') ;
        this.out(String.fromCharCode(39)) ;
        this.out(String.fromCharCode(92)) ;
        this.out('t') ;
        this.out(String.fromCharCode(39)) ;
        this.out(') ;') ;
        this.eol() ;
        this.pflag = true ;
      } ;
    } ;
    if (!this.pflag) {
      this.test('․ՁԴ+');
      if (this.pflag) {
        this.out('this.stack[this.stackframe + 2] += 2 ;') ;
        this.eol() ;
        this.pflag = true ;
      } ;
    } ;
    if (!this.pflag) {
      this.test('․ՁԴ-');
      if (this.pflag) {
        this.out('this.stack[this.stackframe + 2] -= 2 ;') ;
        this.eol() ;
        this.pflag = true ;
      } ;
    } ;
    if (!this.pflag) {
      this.test('․ԵՐԿԱՐՈՒԹԻՒՆ_ՏՈՂԻ');
      if (this.pflag) {
        this.out('this.out(this.token.length) ;') ;
        this.eol() ;
        this.pflag = true ;
      } ;
    } ;
    if (!this.pflag) {
      this.test('․ՄԱՍՆԱՏՈՒՄ_ՏՈՂԻ_ԸՍՏ');
      if (this.pflag) {
        this.ctxpush('ՏՈՂ') ;
        this["կանոն֊ՏՈՂ"]() ;
        this.ctxpop() ;
        if (this.eflag) return ;
        if (!this.pflag) this.err();
        this.out('for (let i = 0; i < this.token.length; i++) {') ;
        this.eol() ;
        this.pflag = true ;
        this.out('       this.out("') ;
        this.out(this.token) ;
        this.out('" + this.token.charCodeAt(i) + ",");') ;
        this.eol() ;
        this.pflag = true ;
        this.out('       this.eol();') ;
        this.eol() ;
        this.pflag = true ;
        this.out('}') ;
        this.eol() ;
        this.pflag = true ;
      } ;
    } ;
    if (!this.pflag) {
      this.test('․ՍՏԱՆԱԼ');
      if (this.pflag) {
        this.out('this.out(this.symbol_table[') ;
        this.pflag = true ;
        this.test('*');
        if (this.pflag) {
          this.out('this.token') ;
          this.pflag = true ;
        } ;
        if (!this.pflag) {
          this.ctxpush('ՏՈՂ') ;
          this["կանոն֊ՏՈՂ"]() ;
          this.ctxpop() ;
          if (this.eflag) return ;
          if (this.pflag) {
            this.out('"') ;
            this.out(this.token) ;
            this.out('"') ;
            this.pflag = true ;
          } ;
        } ;
        if (!this.pflag) this.err();
        this.out(']) ;') ;
        this.eol() ;
        this.pflag = true ;
      } ;
    } ;
  } ,

  // can i change this.token to create charCode generic ?
  // սահման եզերաց 
  "կանոն֊ՍԱՀՄԱՆ֊ԵԶԵՐ": function () {
    this.ctxpush('ԲԱՂԱԴՐԻՉ֊ԵԶԵՐ') ;
    this["կանոն֊ԲԱՂԱԴՐԻՉ֊ԵԶԵՐ"]() ;
    this.ctxpop() ;
    if (this.eflag) return ;
    if (this.pflag) {
      this.pflag = true ;
      while (this.pflag) {
        this.test('|');
        if (this.pflag) {
          this.out('if (!this.pflag) {') ;
          this.stack[this.stackframe + 2] += 2 ;
          this.eol() ;
          this.pflag = true ;
          this.ctxpush('ԲԱՂԱԴՐԻՉ֊ԵԶԵՐ') ;
          this["կանոն֊ԲԱՂԱԴՐԻՉ֊ԵԶԵՐ"]() ;
          this.ctxpop() ;
          if (this.eflag) return ;
          if (!this.pflag) this.err();
          this.stack[this.stackframe + 2] -= 2 ;
          this.out('} ;') ;
          this.eol() ;
          this.pflag = true ;
        } ;
      } ;
      this.pflag = true ;
      if (!this.pflag) this.err();
    } ;
  } ,

  "կանոն֊ԲԱՂԱԴՐԻՉ֊ԵԶԵՐ": function () {
    this.ctxpush('ՏԱՐՐ֊ԵԶԵՐ') ;
    this["կանոն֊ՏԱՐՐ֊ԵԶԵՐ"]() ;
    this.ctxpop() ;
    if (this.eflag) return ;
    if (this.pflag) {
      this.out('if (this.pflag) {') ;
      this.stack[this.stackframe + 2] += 2 ;
      this.eol() ;
      this.pflag = true ;
      this.pflag = true ;
      while (this.pflag) {
        this.ctxpush('ՏԱՐՐ֊ԵԶԵՐ') ;
        this["կանոն֊ՏԱՐՐ֊ԵԶԵՐ"]() ;
        this.ctxpop() ;
        if (this.eflag) return ;
        if (this.pflag) {
          this.out('if (!this.pflag) return;') ;
          this.eol() ;
          this.pflag = true ;
        } ;
      } ;
      this.pflag = true ;
      if (!this.pflag) this.err();
      this.stack[this.stackframe + 2] -= 2 ;
      this.out('} ;') ;
      this.eol() ;
      this.pflag = true ;
    } ;
  } ,

  "կանոն֊ՏԱՐՐ֊ԵԶԵՐ": function () {
    this.test('․ՍԿԻԶԲ֊ԵԶԵՐ');
    if (this.pflag) {
      this.out('this.tflag = true ; ') ;
      this.eol() ;
      this.pflag = true ;
      this.out('this.token = ') ;
      this.out(String.fromCharCode(39)) ;
      this.out(String.fromCharCode(39)) ;
      this.out(' ;') ;
      this.eol() ;
      this.pflag = true ;
    } ;
    if (!this.pflag) {
      this.test('․ԱՒԱՐՏ֊ԵԶԵՐ');
      if (this.pflag) {
        this.out('this.tflag = false ;') ;
        this.eol() ;
        this.pflag = true ;
      } ;
    } ;
    if (!this.pflag) {
      this.test('{');
      if (this.pflag) {
        this.out('this.pflag = true ;') ;
        this.eol() ;
        this.pflag = true ;
        this.out('while (this.pflag) {') ;
        this.stack[this.stackframe + 2] += 2 ;
        this.eol() ;
        this.pflag = true ;
        this.ctxpush('ՍԱՀՄԱՆ֊ԵԶԵՐ') ;
        this["կանոն֊ՍԱՀՄԱՆ֊ԵԶԵՐ"]() ;
        this.ctxpop() ;
        if (this.eflag) return ;
        if (!this.pflag) this.err();
        this.stack[this.stackframe + 2] -= 2 ;
        this.out('};') ;
        this.eol() ;
        this.pflag = true ;
        this.test('}');
        if (!this.pflag) this.err();
      } ;
    } ;
    if (this.pflag) {
      this.out('this.pflag = true ;') ;
      this.eol() ;
      this.pflag = true ;
    } ;
    if (!this.pflag) {
      this.test('․ՄԻՆ֊ՈՉ֊Ի(');
      if (this.pflag) {
        this.ctxpush('ՍԱՀՄԱՆ֊ՏԱՐԵՐ֊ԵԶԵՐ') ;
        this["կանոն֊ՍԱՀՄԱՆ֊ՏԱՐԵՐ֊ԵԶԵՐ"]() ;
        this.ctxpop() ;
        if (this.eflag) return ;
        if (!this.pflag) this.err();
        this.test(')');
        if (!this.pflag) this.err();
        this.out('this.pflag = !this.pflag ;') ;
        this.eol() ;
        this.pflag = true ;
        this.out('if (this.pflag) {') ;
        this.stack[this.stackframe + 2] += 2 ;
        this.eol() ;
        this.pflag = true ;
        this.out('if (this.tflag) this.token += this.inbuf.charAt(this.inp) ;') ;
        this.eol() ;
        this.pflag = true ;
        this.out('this.inp++ } ;') ;
        this.stack[this.stackframe + 2] -= 2 ;
        this.eol() ;
        this.pflag = true ;
      } ;
    } ;
    if (!this.pflag) {
      this.test('․ՄԻՆ֊Ի(');
      if (this.pflag) {
        this.ctxpush('ՍԱՀՄԱՆ֊ՏԱՐԵՐ֊ԵԶԵՐ') ;
        this["կանոն֊ՍԱՀՄԱՆ֊ՏԱՐԵՐ֊ԵԶԵՐ"]() ;
        this.ctxpop() ;
        if (this.eflag) return ;
        if (!this.pflag) this.err();
        this.test(')');
        if (!this.pflag) this.err();
        this.out('if (this.pflag) {') ;
        this.stack[this.stackframe + 2] += 2 ;
        this.eol() ;
        this.pflag = true ;
        this.out('if (this.tflag) this.token += this.inbuf.charAt(this.inp) ;') ;
        this.eol() ;
        this.pflag = true ;
        this.out('this.inp++ } ;') ;
        this.stack[this.stackframe + 2] -= 2 ;
        this.eol() ;
        this.pflag = true ;
      } ;
    } ;
    if (!this.pflag) {
      this.test('․ՍՏՈՒԳԵԼ(');
      if (this.pflag) {
        this.ctxpush('ՍԱՀՄԱՆ֊ՏԱՐԵՐ֊ԵԶԵՐ') ;
        this["կանոն֊ՍԱՀՄԱՆ֊ՏԱՐԵՐ֊ԵԶԵՐ"]() ;
        this.ctxpop() ;
        if (this.eflag) return ;
        if (!this.pflag) this.err();
        this.test(')');
        if (!this.pflag) this.err();
        this.out('if (this.pflag) this.inp++ ;') ;
        this.eol() ;
        this.pflag = true ;
      } ;
    } ;
    if (!this.pflag) {
      this.test('․ԴԱՏԱՐԿ');
      if (this.pflag) {
        this.out('this.pflag = true ;') ;
        this.eol() ;
        this.pflag = true ;
      } ;
    } ;
    if (!this.pflag) {
      this.ctxpush('ՏԱՐԲԵՐԱՆՇԱՆ') ;
      this["կանոն֊ՏԱՐԲԵՐԱՆՇԱՆ"]() ;
      this.ctxpop() ;
      if (this.eflag) return ;
      if (this.pflag) {
        this.out('this.ctxpush(') ;
        this.out(String.fromCharCode(39)) ;
        this.out(this.token) ;
        this.out(String.fromCharCode(39)) ;
        this.out(') ;') ;
        this.eol() ;
        this.pflag = true ;
        this.out('this["կանոն֊') ;
        this.out(this.token) ;
        this.out('"]() ;') ;
        this.eol() ;
        this.pflag = true ;
        this.out('this.ctxpop() ;') ;
        this.eol() ;
        this.pflag = true ;
        this.out('if (this.eflag) return ;') ;
        this.eol() ;
        this.pflag = true ;
      } ;
    } ;
    if (!this.pflag) {
      this.test('․ՀԻՄՆԱԲԱՌ');
      if (this.pflag) {
        this.test('(');
        if (!this.pflag) this.err();
        this.ctxpush('ՏՈՂ') ;
        this["կանոն֊ՏՈՂ"]() ;
        this.ctxpop() ;
        if (this.eflag) return ;
        if (!this.pflag) this.err();
        this.out('this.reservedWord(') ;
        this.out(String.fromCharCode(39)) ;
        this.out(this.token) ;
        this.out(String.fromCharCode(39)) ;
        this.out(');') ;
        this.eol() ;
        this.pflag = true ;
        this.pflag = true ;
        while (this.pflag) {
          this.ctxpush('ՏՈՂ') ;
          this["կանոն֊ՏՈՂ"]() ;
          this.ctxpop() ;
          if (this.eflag) return ;
          if (this.pflag) {
            this.out('if (this.pflag) {') ;
            this.stack[this.stackframe + 2] += 2 ;
            this.eol() ;
            this.pflag = true ;
            this.out('this.reservedWord(') ;
            this.out(String.fromCharCode(39)) ;
            this.out(this.token) ;
            this.out(String.fromCharCode(39)) ;
            this.out(');') ;
            this.eol() ;
            this.pflag = true ;
            this.stack[this.stackframe + 2] -= 2 ;
            this.out('}') ;
            this.eol() ;
            this.pflag = true ;
          } ;
        } ;
        this.pflag = true ;
        if (!this.pflag) this.err();
        this.test(')');
        if (!this.pflag) this.err();
      } ;
    } ;
    if (!this.pflag) {
      this.test('(');
      if (this.pflag) {
        this.ctxpush('ՍԱՀՄԱՆ֊ԵԶԵՐ') ;
        this["կանոն֊ՍԱՀՄԱՆ֊ԵԶԵՐ"]() ;
        this.ctxpop() ;
        if (this.eflag) return ;
        if (!this.pflag) this.err();
        this.test(')');
        if (!this.pflag) this.err();
      } ;
    } ;
  } ,

  // գրահիւսային արտայայտութիւնք 
  "կանոն֊ՍԱՀՄԱՆ֊ՏԱՐԵՐ֊ԵԶԵՐ": function () {
    this.out('this.pflag = ') ;
    this.stack[this.stackframe + 2] += 2 ;
    this.eol() ;
    this.pflag = true ;
    if (true) {
      this.ctxpush('ՏԱՐԲԵՐԱԿ֊ՏԱՐԵՐ֊ԵԶԵՐ') ;
      this["կանոն֊ՏԱՐԲԵՐԱԿ֊ՏԱՐԵՐ֊ԵԶԵՐ"]() ;
      this.ctxpop() ;
      if (this.eflag) return ;
      if (!this.pflag) this.err();
      this.pflag = true ;
      while (this.pflag) {
        this.test('!');
        if (this.pflag) {
          this.out(' ||') ;
          this.eol() ;
          this.pflag = true ;
          this.ctxpush('ՏԱՐԲԵՐԱԿ֊ՏԱՐԵՐ֊ԵԶԵՐ') ;
          this["կանոն֊ՏԱՐԲԵՐԱԿ֊ՏԱՐԵՐ֊ԵԶԵՐ"]() ;
          this.ctxpop() ;
          if (this.eflag) return ;
          if (!this.pflag) this.err();
        } ;
      } ;
      this.pflag = true ;
      if (!this.pflag) this.err();
      this.stack[this.stackframe + 2] -= 2 ;
      this.out(' ;') ;
      this.eol() ;
      this.pflag = true ;
    } ;
  } ,

  "կանոն֊ՏԱՐԲԵՐԱԿ֊ՏԱՐԵՐ֊ԵԶԵՐ": function () {
    this.ctxpush('ՍԱՀՄԱՆ֊ՆՇԱՆԻ') ;
    this["կանոն֊ՍԱՀՄԱՆ֊ՆՇԱՆԻ"]() ;
    this.ctxpop() ;
    if (this.eflag) return ;
    if (this.pflag) {
      this.test(':');
      if (this.pflag) {
        this.out('((this.inbuf.charCodeAt(this.inp) >= ') ;
        this.out(this.token) ;
        this.out(') &&') ;
        this.eol() ;
        this.pflag = true ;
        this.ctxpush('ՍԱՀՄԱՆ֊ՆՇԱՆԻ') ;
        this["կանոն֊ՍԱՀՄԱՆ֊ՆՇԱՆԻ"]() ;
        this.ctxpop() ;
        if (this.eflag) return ;
        if (!this.pflag) this.err();
        this.out(' (this.inbuf.charCodeAt(this.inp) <= ') ;
        this.out(this.token) ;
        this.out(')  )') ;
        this.pflag = true ;
      } ;
      if (!this.pflag) {
        this.pflag = true ;
        if (this.pflag) {
          this.out('(this.inbuf.charCodeAt(this.inp) == ') ;
          this.out(this.token) ;
          this.out(') ') ;
          this.pflag = true ;
        } ;
      } ;
      if (!this.pflag) this.err();
    } ;
  } ,

  "կանոն֊ՍԱՀՄԱՆ֊ՆՇԱՆԻ": function () {
    this.ctxpush('ԹԻՒ') ;
    this["կանոն֊ԹԻՒ"]() ;
    this.ctxpop() ;
    if (this.eflag) return ;
    if (this.pflag) {
    } ;
    if (!this.pflag) {
      this.ctxpush('ԱՊԱԹԱՐՑ') ;
      this["կանոն֊ԱՊԱԹԱՐՑ"]() ;
      this.ctxpop() ;
      if (this.eflag) return ;
      if (this.pflag) {
        this.token = this.inbuf.charCodeAt(this.inp) ;
        this.inp++ ;
        if (!this.pflag) this.err();
      } ;
    } ;
  } ,

  // սահման եզերաց 
  "կանոն֊ԲԱՑԱՏ": function () {
    this.pflag = true ;
    while (this.pflag) {
      this.pflag = 
        (this.inbuf.charCodeAt(this.inp) == 32)  ||
        (this.inbuf.charCodeAt(this.inp) == 9)  ||
        (this.inbuf.charCodeAt(this.inp) == 13)  ||
        (this.inbuf.charCodeAt(this.inp) == 10)  ;
      if (this.pflag) {
        if (this.tflag) this.token += this.inbuf.charAt(this.inp) ;
        this.inp++ } ;
      if (this.pflag) {
      } ;
    };
    this.pflag = true ;
    if (this.pflag) {
    } ;
  } ,

  "կանոն֊ՏԱՐԲԵՐԱՆՇԱՆ": function () {
    this.ctxpush('ԲԱՑԱՏ') ;
    this["կանոն֊ԲԱՑԱՏ"]() ;
    this.ctxpop() ;
    if (this.eflag) return ;
    if (this.pflag) {
      this.tflag = true ; 
      this.token = '' ;
      this.pflag = true ;
      if (!this.pflag) return;
      this.ctxpush('ԳՐԱՆՇԱՆ') ;
      this["կանոն֊ԳՐԱՆՇԱՆ"]() ;
      this.ctxpop() ;
      if (this.eflag) return ;
      if (!this.pflag) return;
      this.pflag = true ;
      while (this.pflag) {
        this.ctxpush('ԳՐԱՆՇԱՆ') ;
        this["կանոն֊ԳՐԱՆՇԱՆ"]() ;
        this.ctxpop() ;
        if (this.eflag) return ;
        if (this.pflag) {
        } ;
        if (!this.pflag) {
          this.ctxpush('ԹՈՒԱՆՇԱՆ') ;
          this["կանոն֊ԹՈՒԱՆՇԱՆ"]() ;
          this.ctxpop() ;
          if (this.eflag) return ;
          if (this.pflag) {
          } ;
        } ;
      };
      this.pflag = true ;
      if (!this.pflag) return;
      this.tflag = false ;
      this.pflag = true ;
      if (!this.pflag) return;
    } ;
  } ,

  "կանոն֊ԹԻՒ": function () {
    this.ctxpush('ԲԱՑԱՏ') ;
    this["կանոն֊ԲԱՑԱՏ"]() ;
    this.ctxpop() ;
    if (this.eflag) return ;
    if (this.pflag) {
      this.tflag = true ; 
      this.token = '' ;
      this.pflag = true ;
      if (!this.pflag) return;
      this.ctxpush('ԹՈՒԱՆՇԱՆ') ;
      this["կանոն֊ԹՈՒԱՆՇԱՆ"]() ;
      this.ctxpop() ;
      if (this.eflag) return ;
      if (!this.pflag) return;
      this.pflag = true ;
      while (this.pflag) {
        this.ctxpush('ԹՈՒԱՆՇԱՆ') ;
        this["կանոն֊ԹՈՒԱՆՇԱՆ"]() ;
        this.ctxpop() ;
        if (this.eflag) return ;
        if (this.pflag) {
        } ;
      };
      this.pflag = true ;
      if (!this.pflag) return;
      this.tflag = false ;
      this.pflag = true ;
      if (!this.pflag) return;
    } ;
  } ,

  "կանոն֊ՏՈՂ": function () {
    this.ctxpush('ԲԱՑԱՏ') ;
    this["կանոն֊ԲԱՑԱՏ"]() ;
    this.ctxpop() ;
    if (this.eflag) return ;
    if (this.pflag) {
      this.ctxpush('ԱՊԱԹԱՐՑ') ;
      this["կանոն֊ԱՊԱԹԱՐՑ"]() ;
      this.ctxpop() ;
      if (this.eflag) return ;
      if (!this.pflag) return;
      this.tflag = true ; 
      this.token = '' ;
      this.pflag = true ;
      if (!this.pflag) return;
      this.pflag = true ;
      while (this.pflag) {
        this.pflag = 
          (this.inbuf.charCodeAt(this.inp) == 13)  ||
          (this.inbuf.charCodeAt(this.inp) == 10)  ||
          (this.inbuf.charCodeAt(this.inp) == 39)  ;
        this.pflag = !this.pflag ;
        if (this.pflag) {
          if (this.tflag) this.token += this.inbuf.charAt(this.inp) ;
          this.inp++ } ;
        if (this.pflag) {
        } ;
      };
      this.pflag = true ;
      if (!this.pflag) return;
      this.tflag = false ;
      this.pflag = true ;
      if (!this.pflag) return;
      this.ctxpush('ԱՊԱԹԱՐՑ') ;
      this["կանոն֊ԱՊԱԹԱՐՑ"]() ;
      this.ctxpop() ;
      if (this.eflag) return ;
      if (!this.pflag) return;
    } ;
  } ,

  "կանոն֊ԳՐԱՆՇԱՆ": function () {
    this.pflag = 
      ((this.inbuf.charCodeAt(this.inp) >= 65) &&
       (this.inbuf.charCodeAt(this.inp) <= 90)  ) ||
      ((this.inbuf.charCodeAt(this.inp) >= 97) &&
       (this.inbuf.charCodeAt(this.inp) <= 122)  ) ||
      ((this.inbuf.charCodeAt(this.inp) >= 1329) &&
       (this.inbuf.charCodeAt(this.inp) <= 1364)  ) ||
      (this.inbuf.charCodeAt(this.inp) == 95)  ||
      (this.inbuf.charCodeAt(this.inp) == 1418)  ;
    if (this.pflag) {
      if (this.tflag) this.token += this.inbuf.charAt(this.inp) ;
      this.inp++ } ;
    if (this.pflag) {
    } ;
  } ,

  "կանոն֊ԹՈՒԱՆՇԱՆ": function () {
    this.pflag = 
      ((this.inbuf.charCodeAt(this.inp) >= 48) &&
       (this.inbuf.charCodeAt(this.inp) <= 57)  ) ;
    if (this.pflag) {
      if (this.tflag) this.token += this.inbuf.charAt(this.inp) ;
      this.inp++ } ;
    if (this.pflag) {
    } ;
  } ,

  "կանոն֊ԱՊԱԹԱՐՑ": function () {
    this.ctxpush('ԲԱՑԱՏ') ;
    this["կանոն֊ԲԱՑԱՏ"]() ;
    this.ctxpop() ;
    if (this.eflag) return ;
    if (this.pflag) {
      this.pflag = 
        (this.inbuf.charCodeAt(this.inp) == 39)  ;
      if (this.pflag) {
        if (this.tflag) this.token += this.inbuf.charAt(this.inp) ;
        this.inp++ } ;
      if (!this.pflag) return;
    } ;
  } ,

  "կանոն֊ԳՐԱՀԻՒՍ֊ՄԵԿՆՈՒԹԵԱՆ": function () {
    this.tflag = true ; 
    this.token = '' ;
    this.pflag = true ;
    if (this.pflag) {
      this.pflag = true ;
      while (this.pflag) {
        this.pflag = 
          (this.inbuf.charCodeAt(this.inp) == 10)  ||
          (this.inbuf.charCodeAt(this.inp) == 13)  ;
        this.pflag = !this.pflag ;
        if (this.pflag) {
          if (this.tflag) this.token += this.inbuf.charAt(this.inp) ;
          this.inp++ } ;
        if (this.pflag) {
        } ;
      };
      this.pflag = true ;
      if (!this.pflag) return;
      this.tflag = false ;
      this.pflag = true ;
      if (!this.pflag) return;
    } ;
  } ,

  // փոփոխականք ընթացիկ գործառնականք
  pflag: false ,
  tflag: false ,
  eflag: false ,
  inp: 0 ,
  inbuf:  '' ,
  outbuf:  '' ,
  erule:  '' ,
  einput: 0 ,
  token: '' ,
  labelcount: 0 ,
  stackframesize: 3 ,
  stackframe: 0 ,
  stos: -1 ,
  stack: [] ,
  named_counters: {} ,
  symbol_table: {} ,

  initialize: function () {
    // դարձ առ սկզբնադիր մեծութիւնս, վասն վերստին թարգմանութեան
    this.pflag = true ;
    this.tflag = false ;
    this.eflag = false ;
    this.inp = 0 ;
    this.outbuf = '' ;
    this.erule = '' ;
    this.einput = 0 ;
    this.token = '' ;
    this.labelcount = 1 ;
    this.stackframe = -1 ;
    this.stos = -1 ;
    this.stack = [] ;
    this.named_counters = {} ;
    this.symbol_table = {} ;
  },

  ctxpush: function (rulename){
    // ստեղծանել եւ ի ներս մղել զնոր պահունակադաշտ
    var ՁԴ ;
    // ձախ դաշտ նորոյն համահիւսի ժառանգէ զձախ դաշտն ընթացիկ համահիւսի
    ՁԴ = 0; if (this.stackframe >= 0) ՁԴ = this.stack[this.stackframe + 2] ;
    this.stos++ ;
    this.stackframe = this.stos * this.stackframesize ;
    // սահման պահունակադաշտի
    this.stack[this.stackframe + 0] = 0 ;        // ստեղծեալ նշիչ
    this.stack[this.stackframe + 1] = rulename ; // անուն ընթացիկ կանոնի
    this.stack[this.stackframe + 2] = ՁԴ ;       // ձախ դաշտ
  },

  ctxpop: function (){
    // ի դուրս մղել եւ գուցէ ջնջել զնախկին պահունակադաշտն
    this.stos-- ; // ի դուրս մղել զդաշտն
    this.stackframe = this.stos * this.stackframesize ;
  },

  out: function (s){
    // արտածել զտող
    var i ;
    // եթե նոր տող սկանի, ապա  արտածել զձախ դաշտն նախ քան զտողն
    if (this.outbuf.charAt(this.outbuf.length - 1) == '\n') {
      i = this.stack[this.stackframe + 2] ;
      while (i>0) { this.outbuf += ' ' ; i-- } ; } ;
    this.outbuf += s ;
  },

  eol: function (){
    // output end of line
    this.outbuf += '\n' ;
  },

  test: function (s) {
    // test for a string in the input
    var i ;
    // delete whitespace
    while ((this.inbuf.charAt(this.inp) == ' ')  ||
           (this.inbuf.charAt(this.inp) == '\n') ||
           (this.inbuf.charAt(this.inp) == '\r') ||
           (this.inbuf.charAt(this.inp) == '\t') ) this.inp++ ;
    // test string case insensitive
    this.pflag = true ; i = 0 ;
    while (this.pflag && (i < s.length) && ((this.inp+i) < this.inbuf.length) )
    { this.pflag = (s.charAt(i) == this.inbuf.charAt(this.inp+i)) ;
      i++ ; } ;
    this.pflag = this.pflag && (i == s.length) ;
    // advance input if found
    if (this.pflag) this.inp = this.inp + s.length ;
  },

  reservedWord: function (s) {
    // delete whitespace
    while ((this.inbuf.charAt(this.inp) == ' ')  ||
           (this.inbuf.charAt(this.inp) == '\n') ||
           (this.inbuf.charAt(this.inp) == '\r') ||
           (this.inbuf.charAt(this.inp) == '\t') ) this.inp++ ;
    // test string
    this.pflag = true;
    var i = 0;
    while (this.pflag && (i < s.length) && ((this.inp+i) < this.inbuf.length) ) {
      this.pflag = s.charAt(i) == this.inbuf.charAt(this.inp+i);
      i++;
    };
    this.pflag = this.pflag && (i == s.length);
    // if found reserved word, set pflag false
    this.pflag = !this.pflag;
  },

  err: function () {
    // compilation error, provide error indication and context
    this.eflag = true ;
    this.erule = this.stack[this.stackframe + 1] ;
    this.einput = this.inp ;
  },

}

export {compiler}

