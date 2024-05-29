import { Header } from "../header"

// eslint-disable-next-line react/prop-types
export const PageLayout = ({children}) => {
    return (
        <>
            <Header/>
            {children}

        </>
    )
}