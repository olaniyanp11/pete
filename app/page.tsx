import Nums from "./components/Nums"
import Profile from "./components/Profile"
import ClientService from "./components/ClientService"
import WorhH from './components/WorhH'
import Follow from './components/Follow'
import Reliability  from "./components/Reliability"
export default function Page() {
    return <>

        <>
            <div className=" flex justify-center flex-col items-center">
                <div className="md:w-[50%] w-full md:px-0 px-2">
                    <Nums />
                    <Profile />
                    <ClientService />
                    <WorhH />
                    <Follow />
                    <Reliability/>
                </div>
            </div>
        </>

    </>;
}
