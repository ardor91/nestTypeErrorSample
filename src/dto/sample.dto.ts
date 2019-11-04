import { ApiModelProperty, ApiModelPropertyOptional } from "@nestjs/swagger";

export class SampleDto {
    @ApiModelPropertyOptional()
    readonly level: number;
}