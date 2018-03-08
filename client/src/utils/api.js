var axios = require('axios');

// var coverletter = "Vice President Johnson, Mr. Speaker, Mr. Chief Justice, President Eisenhower,\nVice President Nixon, President Truman, Reverend Clergy, fellow citizens:\n\nWe observe today not a victory of party but a celebration of freedom --\nsymbolizing an end as well as a beginning -- signifying renewal as well as\nchange. For I have sworn before you and Almighty God the same solemn oath our\nforbears prescribed nearly a century and three-quarters ago.\n\nThe world is very different now. For man holds in his mortal hands the power\nto abolish all forms of human poverty and all forms of human life. And yet\nthe same revolutionary beliefs for which our forebears fought are still at\nissue around the globe -- the belief that the rights of man come not from the\ngenerosity of the state but from the hand of God.\n\nWe dare not forget today that we are the heirs of that first revolution. Let\nthe word go forth from this time and place, to friend and foe alike, that the\ntorch has been passed to a new generation of Americans -- born in this century,\ntempered by war, disciplined by a hard and bitter peace, proud of our ancient\nheritage -- and unwilling to witness or permit the slow undoing of those human\nrights to which this nation has always been committed, and to which we are\ncommitted today at home and around the world.\n\nLet every nation know, whether it wishes us well or ill, that we shall pay\nany price, bear any burden, meet any hardship, support any friend, oppose\nany foe to assure the survival and the success of liberty.\n\nThis much we pledge -- and more.\n\nTo those old allies whose cultural and spiritual origins we share, we pledge\nthe loyalty of faithful friends. United there is little we cannot do in a host\nof cooperative ventures. Divided there is little we can do -- for we dare not\nmeet a powerful challenge at odds and split asunder.\n\nTo those new states whom we welcome to the ranks of the free, we pledge our\nword that one form of colonial control shall not have passed away merely to\nbe replaced by a far more iron tyranny. We shall not always expect to find\nthem supporting our view. But we shall always hope to find them strongly\nsupporting their own freedom -- and to remember that, in the past, those who\nfoolishly sought power by riding the back of the tiger ended up inside.\n\nTo those people in the huts and villages of half the globe struggling to\nbreak the bonds of mass misery, we pledge our best efforts to help them help\nthemselves, for whatever period is required -- not because the communists may\nbe doing it, not because we seek their votes, but because it is right. If a\nfree society cannot help the many who are poor, it cannot save the few who\nare rich.\n\nTo our sister republics south of our border, we offer a special pledge -- to\nconvert our good words into good deeds -- in a new alliance for progress --\nto assist free men and free governments in casting off the chains of poverty.\nBut this peaceful revolution of hope cannot become the prey of hostile powers.\nLet all our neighbors know that we shall join with them to oppose aggression\nor subversion anywhere in the Americas. And let every other power know that\nthis Hemisphere intends to remain the master of its own house.\n\nTo that world assembly of sovereign states, the United Nations, our last best\nhope in an age where the instruments of war have far outpaced the instruments\nof peace, we renew our pledge of support -- to prevent it from becoming merely\na forum for invective -- to strengthen its shield of the new and the weak --\nand to enlarge the area in which its writ may run.\n\nFinally, to those nations who would make themselves our adversary, we offer\nnot a pledge but a request: that both sides begin anew the quest for peace,\nbefore the dark powers of destruction unleashed by science engulf all humanity\nin planned or accidental self-destruction.\n\nWe dare not tempt them with weakness. For only when our arms are sufficient\nbeyond doubt can we be certain beyond doubt that they will never be employed.\n\nBut neither can two great and powerful groups of nations take comfort from\nour present course -- both sides overburdened by the cost of modern weapons,\nboth rightly alarmed by the steady spread of the deadly atom, yet both racing\nto alter that uncertain balance of terror that stays the hand of mankind's\nfinal war.\n\nSo let us begin anew -- remembering on both sides that civility is not a sign\nof weakness, and sincerity is always subject to proof. Let us never negotiate\nout of fear. But let us never fear to negotiate.\n\nLet both sides explore what problems unite us instead of belaboring those\nproblems which divide us.\n\nLet both sides, for the first time, formulate serious and precise proposals\nfor the inspection and control of arms -- and bring the absolute power to\ndestroy other nations under the absolute control of all nations.\n\nLet both sides seek to invoke the wonders of science instead of its terrors.\nTogether let us explore the stars, conquer the deserts, eradicate disease,\ntap the ocean depths and encourage the arts and commerce.\n\nLet both sides unite to heed in all corners of the earth the command of\nIsaiah -- to \"undo the heavy burdens ... (and) let the oppressed go free.\"\n\nAnd if a beachhead of cooperation may push back the jungle of suspicion, let\nboth sides join in creating a new endeavor, not a new balance of power, but\na new world of law, where the strong are just and the weak secure and the\npeace preserved.\n\nAll this will not be finished in the first one hundred days. Nor will it be\nfinished in the first one thousand days, nor in the life of this\nAdministration, nor even perhaps in our lifetime on this planet. But let us\nbegin.\n\nIn your hands, my fellow citizens, more than mine, will rest the final success\nor failure of our course. Since this country was founded, each generation of\nAmericans has been summoned to give testimony to its national loyalty. The\ngraves of young Americans who answered the call to service surround the globe.\n\nNow the trumpet summons us again -- not as a call to bear arms, though arms we\nneed -- not as a call to battle, though embattled we are -- but a call to bear\nthe burden of a long twilight struggle, year in and year out, \"rejoicing in\nhope, patient in tribulation\" -- a struggle against the common enemies of man:\ntyranny, poverty, disease and war itself.\n\nCan we forge against these enemies a grand and global alliance, North and\nSouth, East and West, that can assure a more fruitful life for all mankind?\nWill you join in that historic effort?\n\nIn the long history of the world, only a few generations have been granted\nthe role of defending freedom in its hour of maximum danger. I do not shrink\nfrom this responsibility -- I welcome it. I do not believe that any of us\nwould exchange places with any other people or any other generation. The\nenergy, the faith, the devotion which we bring to this endeavor will light\nour country and all who serve it -- and the glow from that fire can truly\nlight the world.\n\nAnd so, my fellow Americans: ask not what your country can do for you -- ask\nwhat you can do for your country.\n\nMy fellow citizens of the world: ask not what America will do for you, but\nwhat together we can do for the freedom of man.\n\nFinally, whether you are citizens of America or citizens of the world, ask of\nus here the same high standards of strength and sacrifice which we ask of you.\nWith a good conscience our only sure reward, with history the final judge of\nour deeds, let us go forth to lead the land we love, asking His blessing and\nHis help, but knowing that here on earth God's work must truly be our own.\n";
// Reset cover letter data on mlab

// function getFromMlab() {
//   axios.get(mlabURL)
//     .then(function (response) {
//       console.log(response);
//       return response;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

// function insertToMlab(data) {
//   axios.post(mlabURL, data)
//     .then(function (response) {
//       console.log(response);
//       return data;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

function insertCoverLetter(name, coverletter, filename = null, favorite = 0) {
  var glitch_url = "https://evening-athlete.glitch.me/coverletters";
  var payload = {
    name,
    coverletter
  }
  axios.post(glitch_url, payload)
    .then(function (resp) {
      console.log(resp);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default {
  // getFromMlab: function () {
  //   return getFromMlab();
  // },
  insertCoverLetter: function (name, coverletter) {
    return insertCoverLetter(name, coverletter);
  }
};
