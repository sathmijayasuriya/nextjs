export default function PrfofileLayout({ children }) {
    return (
     <div>
        <div>
           <h1 className="raw">profileheader</h1> 
        </div>
        {/*  injected profile page */}
        {children}       
        <div className="raw">
            footer
        </div>
     </div>
    );
  }
  