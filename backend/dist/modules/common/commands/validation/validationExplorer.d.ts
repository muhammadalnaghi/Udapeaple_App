import { Type } from '@nestjs/common';
import { InstanceWrapper } from '@nestjs/core/injector/instance-wrapper';
import { Module } from '@nestjs/core/injector/module';
import { ModulesContainer } from '@nestjs/core/injector/modules-container';
import { CommandValidatorOptions } from './commandValidatorOptions';
export declare class ValidationExplorer {
    private readonly modulesContainer;
    constructor(modulesContainer: ModulesContainer);
    explore(): CommandValidatorOptions;
    flatMap<T>(modules: Module[], callback: (instance: InstanceWrapper) => Type<any> | undefined): Type<T>[];
    filterProvider(wrapper: InstanceWrapper, metadataKey: string): Type<any> | undefined;
    extractMetadata(instance: Object, metadataKey: string): Type<any>;
}
