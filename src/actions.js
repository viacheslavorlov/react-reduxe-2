// * action-creators - удобнее использовать чем прописывание объектов вручную
export const inc = () => ({type: 'INC'});
export const dec = () => ({type: 'DEC'});
export const rnd = (value) => ({type: 'RND', payload: value});