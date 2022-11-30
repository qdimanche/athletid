import Pro from "../../assets/images/pro.jpg"
import Sportif from "../../assets/images/sportif.jpg"
import React from "react";
import PlusIcon from "./PlusIcon";


const SocialAppContent = React.forwardRef((props, ref) => {


    return (
        <div data-scroll-section data-scroll className={'lg:py-8 lg:px-32 p-5 flex items-center'}>
            <div className={'flex md:flex-row flex-col md:space-x-6 md:space-y-0 space-y-5' }>
                <div className={'overflow-hidden aspect-square rounded-[30px] lg:rounded-[40px] md:w-1/2 w-full relative'}>
                    <div className={'px-4 py-1 rounded-[30px] bg-[#303539] text-white mb-8 text-[0.9em] absolute top-[1.75rem] left-[1.75rem]'}>{props.tagAppFeature1}</div>
                    <img src={Sportif} className={'object-cover h-full'} alt=""/>
                    <PlusIcon
                        titleTab1={"Partage"} textTab1={"Partage ton journal d’entraînement et tes expériences avec la communauté "}
                        titleTab2={"Inspire-toi"} textTab2={"Inspire-toi de sportifs du monde entier et motive-les à ton tour"}
                        titleTab3={"Progresse"} textTab3={"Progresse ! Grâce aux nombreux entraînements et conseils de professionnels du sport"}
                    />
                </div>
                <div className={'overflow-hidden aspect-square rounded-[30px] lg:rounded-[40px] relative md:w-1/2 w-full'}>
                    <div className={'px-4 py-1 rounded-[30px] bg-[#303539] text-white mb-8 text-[0.9em] absolute top-[1.75rem] left-[1.75rem]'}>{props.tagAppFeature2}</div>
                    <img src={Pro} className={'object-cover h-full'} alt=""/>
                    <PlusIcon
                        titleTab1={"Partage"} textTab1={"Partage ton expertise et tes expériences avec la communauté des sportifs du monde entier."}
                        titleTab2={"Gagne"} textTab2={"Gagne en visibilité et en notoriété auprès de ton audience "}
                        titleTab3={"Vends"} textTab3={"Vends tes services dans le monde entier sur notre marketaplace *à venir prochainement. "}
                    />
                </div>


            </div>

        </div>
    );
})

export default SocialAppContent;


