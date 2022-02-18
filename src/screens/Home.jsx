import React from "react";
import { motion } from "framer-motion";
import {pageTransition, pageVariants} from "../assets/framer";
import "./Home.css"

function Home(){
    return(
        <motion.div 
        exit="out"
        animate="in" 
        initial="initial"
        variants={pageVariants}
        transition={pageTransition}
        style={{width: "60%", marginLeft: "9%", marginTop: "10%"}}
        >
        <div className="mainHead" style={{textAlign: "left"}}>
            Hello!<br />I'  m  TEJAS,<br /> A  programmer
            {/* <button>H</button><button>e</button><button>l</button><button>l</button><button>o</button><button>! </button><button>I' </button><button>m</button><button> T</button><button>e</button><button>j</button><button>a</button><button>s,<br /></button><button>A </button><button>P</button><button>r</button><button>o</button><button>g</button><button>r</button><button>a</button><button>m</button><button>m</button><button>e</button><button>r</button> */}
        </div>
        </motion.div>
    )
}

export default Home;