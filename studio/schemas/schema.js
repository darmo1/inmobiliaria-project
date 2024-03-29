
// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import houses from './houses'
import Equipo from './Equipo'
import pqrs from './pqrs'


export default [
    post,
    author,
    category,
    houses,
    Equipo,
    pqrs,
    blockContent,

]



// // Then we give our schema to the builder and provide the result to Sanity
// export default createSchema({
//   // We name our schema
//   name: 'default',
//   // Then proceed to concatenate our document type
//   // to the ones provided by any plugins that are installed
//   types: schemaTypes.concat([
//     // The following are document types which will appear
//     // in the studio.
//     post,
//     author,
//     category,
//     houses,
//     Equipo,
//     pqrs,
//     // When added to this list, object types can be used as
//     // { type: 'typename' } in other document schemas
//     blockContent,
//   ]),
// })
