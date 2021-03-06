<?php

declare(strict_types=1);
/**
 * This file is part of the Volta Project.
 *
 * Copyright (c) 2018 - 2019. AzuyaLabs
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author Sacha Telgenhof <me@sachatelgenhof.com>
 */

namespace App\Events\Weather;

use Illuminate\Broadcasting\Channel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

/**
 * Class handling the broadcasting events of weather information to the Dashboard.
 */
class WeatherFetched implements ShouldBroadcast
{
    /**
     * @var array list of variables containing weather information
     */
    public $weather;

    /**
     * @var string name of the city for which the weather is displayed
     */
    public $city;

    /**
     * Constructor.
     */
    public function __construct(string $city, array $weather)
    {
        $this->weather = $weather;
        $this->city    = $city;
    }

    /**
     * Get the channel(s) the event should broadcast on.
     *
     * @return array|Channel
     */
    public function broadcastOn()
    {
        return new Channel('weather.'.$this->city);
    }
}
