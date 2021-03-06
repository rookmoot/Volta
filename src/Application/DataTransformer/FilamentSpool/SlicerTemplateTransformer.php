<?php

declare(strict_types=1);

namespace Volta\Application\DataTransformer\FilamentSpool;

use League\Fractal\TransformerAbstract;
use Volta\Domain\FilamentSpool;
use Volta\Domain\ValueObject\FilamentSpool\MaximumVolumetricFlowRate;

class SlicerTemplateTransformer extends TransformerAbstract
{
    private const KEEP_WARM_RATIO = 0.65;

    public function transform(FilamentSpool $spool): array
    {
        return [
            'id'                            => $spool->getId()->getValue(),
            'name'                          => $spool->getName(),
            'manufacturer'                  => $spool->getManufacturer()->getName()->getValue(),
            'diameter'                      => $spool->getDiameter()->toUnit('millimeters'),
            'weight'                        => $spool->getWeight()->toUnit('grams'),
            'material'                      => $spool->getMaterialType()->getValue(),
            'density'                       => $spool->getDensity(),
            'purchase_price'                => $spool->getPurchasePrice()->getAmount(),
            'price_per_kg'                  => $spool->getPricePerKilogram()->getAmount(),
            'color'                         => $spool->getColor()->getColorName()->getValue(),
            'color_code'                    => (string) $spool->getColor()->getColorCode(),
            'display_name'                  => $spool->getDisplayName()->getValue(),
            'min_fan_speed'                 => $spool->getMinimumFanSpeed()->getValue(),
            'max_fan_speed'                 => $spool->getMaximumFanSpeed()->getValue(),
            'bridging_fan_speed'            => $spool->getBridgingFanSpeed()->getValue(),
            'min_print_speed'               => $spool->getMinimumPrintSpeed()->getValue(),
            'first_layer_print_temperature' => $spool->getFirstLayerPrintTemperature()->toUnit('celsius'),
            'next_layer_print_temperature'  => $spool->getNextLayerPrintTemperature()->toUnit('celsius'),
            'first_layer_bed_temperature'   => $spool->getFirstLayerBedTemperature()->toUnit('celsius'),
            'next_layer_bed_temperature'    => $spool->getNextLayerBedTemperature()->toUnit('celsius'),
            'keep_warm_temperature'         => round(
                $spool->getNextLayerPrintTemperature()->toUnit('celsius') * self::KEEP_WARM_RATIO,
                0
            ),
            'maximum_volumetric_speed'      => $spool->getMaximumVolumetricFlowRate()->getValue()->toUnit(MaximumVolumetricFlowRate::CUBIC_MILLIMETER_PER_SECOND),
            'auto_cooling'                  => $spool->hasAutoCooling() ? 1 : 0,
            'note'                          => $spool->getNote(),
            'disable_fan_first_layers'      => $spool->getDisableFanFirstLayers()->getValue(),
            'k_value'                       => $spool->getKValue(),
            'fan_always_on'                 => $spool->isFanAlwaysOn() ? 1 : 0,
            'fan_below_layer_time'          => ($time = $spool->getFanBelowLayerTime()) ? $time->getValue() : '',
            'extrusion_multiplier'          => $spool->getExtrusionMultiplier(),
        ];
    }
}
