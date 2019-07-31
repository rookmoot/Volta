<?php
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

namespace App\Console;

use App\Console\Components\FetchWeather;
use App\Console\Components\FetchHolidays;
use Illuminate\Console\Scheduling\Schedule;
use App\Console\Components\FetchSlicerReleases;
use App\Console\Components\FetchFirmwareReleases;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

/**
 * Class Kernel
 *
 * @package App\Console
 */
class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        UpdateDashboard::class,
        FetchHolidays::class,
        FetchFirmwareReleases::class,
        FetchSlicerReleases::class,
        FetchWeather::class,
        SlicerProfilesCommand::class
    ];

    /**
     * Define the application's command schedule.
     *
     * @param Schedule $schedule
     *
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('dashboard:holidays')->twiceDaily();
        $schedule->command('dashboard:firmwares')->twiceDaily();
        $schedule->command('dashboard:slicers')->twiceDaily();
        $schedule->command('dashboard:weather')->everyFifteenMinutes();
        $schedule->command('volta:vacuum')->weeklyOn(0);
    }
}
