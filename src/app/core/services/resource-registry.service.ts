import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class ResourceRegistryService {

    constructor(
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer) {
    }

    public registerSvgIcon(path: string, iconName: string): void {
        this.matIconRegistry.addSvgIcon(
            iconName,
            this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/${path}/${iconName}.svg`)
        );
    }

}
