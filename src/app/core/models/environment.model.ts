import { DynamicEnvironmentModel } from './dynamic-environment.model';

export interface EnvironmentModel extends DynamicEnvironmentModel {
    production?: boolean;
}
