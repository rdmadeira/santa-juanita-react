export const name = new RegExp(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+$/, 'i');

export const email = new RegExp(
  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  'gm'
);

export const tel = new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/);
