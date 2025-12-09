import {characters, defaultHero, starWarsInfo} from "../utils/constants.ts";
import Text from "./ui/Text.tsx";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import {useParams} from "react-router";
import ErrorPage from "./ErrorPage.tsx";

const StarWars = () => {
    const {changeHero} = useContext(SWContext);
    const {heroId = defaultHero} = useParams();

    useEffect(() => {
        if (!(heroId in characters)) {
            return;
        }
        changeHero(heroId);
    }, [heroId]);
    return (heroId in characters) ?  (
        <Text>{starWarsInfo}</Text>
    ) :<ErrorPage/>
}

export default StarWars;