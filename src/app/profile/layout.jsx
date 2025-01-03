export default function PrfofileLayout({ children }) {
    return (
     <div>
        <div>
           <h1 className="raw">profileheader</h1> 
        </div>
        {/*  this is profile page */}
        {children}       
        <div>
            footer
        </div>
     </div>
    );
  }
  