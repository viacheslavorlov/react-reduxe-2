// * action-creators - удобнее использовать чем прописывание объектов вручную
export const inc = () => ({type: 'INC'});
export const dec = () => ({type: 'DEC'});
export const rnd = () => ({type: 'RND', payload: Math.floor(Math.random() * 10)});
export const div = () => ({type: 'DIV'});
export const multiply = () => ({type: 'MULT'})
export const concat = () => ({type: 'CONCAT'});