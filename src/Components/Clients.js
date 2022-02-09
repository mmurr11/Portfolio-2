// import styled from 'styled-components'
// import { SharedCard } from './SharedCard'

// const Clients  = (props) => {
//     return (
//         <Container className='container'>
            
//             <ClientCard className='clientCard'>
//                 <ClientContainer className='clientContainer'>
//                     <ClientLinkedIn className='clientLinkedIn'/>
//                     <ClientQuote className='clientQuote'>
//                         <quote>"Best webite ever!"</quote>
//                     </ClientQuote>
//                 </ClientContainer>
//                 <Links className='links'>                    
//                         <div>
//                             <span>5 stars</span>
//                         </div>                    
//                 </Links>
//             </ClientCard>

//         </Container>
//     );
// };

// const Container = styled.div`
//     margin-bottom: 10%;
//     align-items: center;
//     display: flex;  
//     flex-direction: row; 
//     justify-content: space-between;   
//     @media (max-width: 768px) {
//         flex-direction: column;
//     }
// `;

// const ClientCard = styled.div`
//   text-align: center;
//   overflow: hidden;
//   background-color: #fff;
//   border-radius: 15%;
//   transition: box-shadow 83ms;
//   position: relative;
//   border: none;
//   box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
//   width: 35rem;
//   min-height: 20rem;
// `;

// const ClientContainer = styled.div`
//   border-bottom: 1px solid rgba(0, 0, 0, 0.15);
//   padding: 12px 12px 16px;
//   word-wrap: break-word;
//   word-break: break-word;
//   width: 100%;
//   height: 100%;
//   align-items: center;
// `;

// const ClientLinkedIn = styled.div`
//     border: 1px solid #141414;
//     width: 30px;
//     height: 30px;
//     border-radius: 50%;
// `;

// const ClientQuote = styled.div`

// `;

// const Links = styled.div`
//   border-bottom: 1px solid rgba(0, 0, 0, 0.15);
//   padding: 6px;
//   div {
//       text-align: center;
//       a {
//           justify-content: space-between;
//           padding: 16px;
//         button {
//             font-size: 12px;
//             font-weight: 700;
//             line-height: 1.3;
//         }
//     }
// }
// `;

// export default Clients