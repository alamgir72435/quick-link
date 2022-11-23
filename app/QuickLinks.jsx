import React ,{ useEffect, useState } from 'react'
import style from './quickLink.module.css';
import { motion } from 'framer-motion'
import Link from './Link';
import {BsPlusSquare} from "react-icons/bs";
import { MdClose } from "react-icons/md"
const QuickLinks = ({ visible, setVisible }) => {

    const [cacheLink, setCacheLink] = useState([]);
    const [links, setLinks] = useState([
        
    ])

    useEffect(() => {
        let items = []
        Array.from({ length:50 }).map((x,i) => {
            items.push({key:i, name:`Link ${i}`})
        });
        setLinks(items);
        setCacheLink(items)
    }, [])


    function searchHandler(event){
        const {value} = event.target;
        const text = String(value).toLowerCase();
        if(text===''){
            setLinks(cacheLink)
        }
        
        let filterData = cacheLink.filter(link => {
            let _ = String(link.name).toLowerCase();
            if(_.indexOf(text) > -1 ){
                return true;
            }
            return false;
        });
        setLinks(filterData)
    }
    


    if(!visible){
        return <></>
    }


  return (
    <div
        className={`${style.wrapper} ${visible?"active":""}`}
     >

        <div className={style.area}>
            <div className={style['form-control']}>
                <input onInput={searchHandler} placeholder='Search' type="text" />
                <button>
                    <span>Add Link</span>
                    <BsPlusSquare />
                </button>
            </div>
            <div className={style.links}>
            {links && links.map(link => <Link key={link.key} link={link} />)}

            {links.length===0 && <div className={style.empty}>
                    No Link Available
            </div>}
            </div>
        </div>

        
        <div onClick={_ => setVisible(false)} className={style.close}>
            <span>
                <MdClose />
            </span>
        </div>
    </div>
  )
}

export default QuickLinks
