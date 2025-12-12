import Navigation from "./Navigation.tsx";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router";
import Text from "./ui/Text.tsx";

const Header = () => {
    const {changeHero} = useContext(SWContext);
    const {hero} = useContext(SWContext)
    const {heroId = defaultHero} = useParams();

    useEffect(() => {
        if (!(heroId in characters)) {
            return;
        }
        changeHero(heroId);
    }, [heroId]);
    return (heroId in characters)?(
        <header className="rounded-t-3xl bg-grey">
            <Navigation/>
            <h1 className="text-center text-4xl py-6">
                {characters[hero].name}
            </h1>
        </header>
    ):<header className="rounded-t-3xl bg-grey">
        <Navigation/>
        <h1 className="text-center text-4xl py-6">
            <Text>
                ERROR
            </Text>
        </h1>
    </header>
}

export default Header;