import type AppiumCommands from './commands/appium.js'
import type ChromiumCommands from './commands/chromium.js'
import type GeckoCommands from './commands/gecko.js'
import type JSONWPCommands from './commands/jsonwp.js'
import type MJSONWPCommands from './commands/mjsonwp.js'
import type SauceLabsCommands from './commands/saucelabs.js'
import type SeleniumCommands from './commands/selenium.js'
import type WebDriverCommands from './commands/webdriver.js'
import type WebDriverBidiCommands from './commands/webdriverBidi.js'

import WebDriverProtocol from './protocols/webdriver.js'
import WebDriverBidiProtocol from './protocols/webdriverBidi.js'
import MJsonWProtocol from './protocols/mjsonwp.js'
import JsonWProtocol from './protocols/jsonwp.js'
import AppiumProtocol from './protocols/appium.js'
import ChromiumProtocol from './protocols/chromium.js'
import GeckoProtocol from './protocols/gecko.js'
import SauceLabsProtocol from './protocols/saucelabs.js'
import SeleniumProtocol from './protocols/selenium.js'

type WebDriverCommandsAsync = {
    [K in keyof WebDriverCommands]:
    (...args: Parameters<WebDriverCommands[K]>) => Promise<ReturnType<WebDriverCommands[K]>>
}
type WebDriverBidiCommandsAsync = {
    [K in keyof WebDriverBidiCommands]:
    (...args: Parameters<WebDriverBidiCommands[K]>) => Promise<ReturnType<WebDriverBidiCommands[K]>>
}
type AppiumCommandsAsync = {
    [K in keyof AppiumCommands]:
    (...args: Parameters<AppiumCommands[K]>) => Promise<ReturnType<AppiumCommands[K]>>
}
type ChromiumCommandsAsync = {
    [K in keyof ChromiumCommands]:
    (...args: Parameters<ChromiumCommands[K]>) => Promise<ReturnType<ChromiumCommands[K]>>
}
type GeckoCommandsAsync = {
    [K in keyof GeckoCommands]:
    (...args: Parameters<GeckoCommands[K]>) => Promise<ReturnType<GeckoCommands[K]>>
}
type JSONWPCommandsAsync = {
    [K in keyof JSONWPCommands]:
    (...args: Parameters<JSONWPCommands[K]>) => Promise<ReturnType<JSONWPCommands[K]>>
}
type MJSONWPCommandsAsync = {
    [K in keyof MJSONWPCommands]:
    (...args: Parameters<MJSONWPCommands[K]>) => Promise<ReturnType<MJSONWPCommands[K]>>
}
type SauceLabsCommandsAsync = {
    [K in keyof SauceLabsCommands]:
    (...args: Parameters<SauceLabsCommands[K]>) => Promise<ReturnType<SauceLabsCommands[K]>>
}
type SeleniumCommandsAsync = {
    [K in keyof SeleniumCommands]:
    (...args: Parameters<SeleniumCommands[K]>) => Promise<ReturnType<SeleniumCommands[K]>>
}

export interface ProtocolCommands extends WebDriverCommands, Omit<JSONWPCommands, keyof WebDriverCommands>, AppiumCommands, ChromiumCommands, Omit<MJSONWPCommands, keyof AppiumCommands | keyof ChromiumCommands>, SauceLabsCommands, SeleniumCommands {}
export interface ProtocolCommandsAsync extends WebDriverCommandsAsync, Omit<JSONWPCommandsAsync, keyof WebDriverCommandsAsync>, AppiumCommandsAsync, ChromiumCommandsAsync, Omit<MJSONWPCommandsAsync, keyof AppiumCommandsAsync | keyof ChromiumCommandsAsync>, SauceLabsCommandsAsync, SeleniumCommandsAsync {}

export * from './types.js'
export {
    // protocols
    WebDriverProtocol, MJsonWProtocol, JsonWProtocol, AppiumProtocol,
    ChromiumProtocol, SauceLabsProtocol, SeleniumProtocol, GeckoProtocol,
    WebDriverBidiProtocol,
    // sync commands
    AppiumCommands, ChromiumCommands, JSONWPCommands, MJSONWPCommands,
    SauceLabsCommands, SeleniumCommands, WebDriverCommands, GeckoCommands,
    WebDriverBidiCommands,
    // async commands
    WebDriverCommandsAsync, AppiumCommandsAsync, ChromiumCommandsAsync,
    JSONWPCommandsAsync, MJSONWPCommandsAsync, SauceLabsCommandsAsync,
    SeleniumCommandsAsync, GeckoCommandsAsync,
    WebDriverBidiCommandsAsync
}

export const CAPABILITY_KEYS = [
    'browserName', 'browserVersion', 'platformName', 'acceptInsecureCerts',
    'pageLoadStrategy', 'proxy', 'setWindowRect', 'timeouts', 'strictFileInteractability',
    'unhandledPromptBehavior', 'webSocketUrl'
]
