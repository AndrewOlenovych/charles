
import {SwiperOptions} from "swiper";

export interface BreakpointsOptions {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
}
