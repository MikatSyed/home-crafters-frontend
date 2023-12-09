"use client";
import { Provider } from "react-redux"
import store from "../redux/store"
import StyledComponentsRegistry from "./AntdRegistry";
import {SessionProvider} from "next-auth/react"

const Providers = ({children} : {children: React.ReactNode}) => {
    return (
      <SessionProvider>
        <Provider store={store}>
            <StyledComponentsRegistry>
            {children}
            </StyledComponentsRegistry>
            </Provider>
            </SessionProvider>
    )
}

export default Providers;