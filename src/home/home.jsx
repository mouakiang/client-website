import { Appt } from "./appt/appt"
import { About } from "./about/about"
import { Map } from "./map/map"

export function Home () {
    return (
        <>
        <Appt />
        <About />
        <Map />
        </>
    )
}